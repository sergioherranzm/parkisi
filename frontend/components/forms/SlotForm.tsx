import { useUser } from '@auth0/nextjs-auth0';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { ISlot } from '../../types/ISlot';
import { FormInput } from './form_widgets/FormInput';
import { FormSelect } from './form_widgets/FormSelect';

export const SlotForm = (props) => {
  const { parkingId } = props;
  const router = useRouter();

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );
  const { data: parking } = useSWR(
    parkingId ? `/parking/detail/${parkingId}` : null
  );

  const methods = useForm();
  const { formState, watch } = methods;

  const [slotData, setSlotData] = useState<ISlot>({});

  const makePost = async () => {
    const url = `${PROXY_URL}/slot`;
    const postResponse: AxiosResponse = await axios.post(url, slotData);
    if (postResponse.status === 200) {
      //send mail
      const mailType = 'slotCreation';
      const mailTo = userProfile?.email;
      const address = parking?.address;
      const description = parking?.description;
      const identification = slotData.identification;
      const hyperlink = `${FRONT_URL}parking/${parking?._id}`;
      const url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&description=${description}&identification=${identification}&hyperlink=${hyperlink}`;
      const sendMailResponse: AxiosResponse = await axios.get(url_mail);
      //redirection
      router.push(`/parking/${parkingId}?newSlot=${postResponse.data.slotId}`);
    } else {
      throw new Error('Slot creation failed');
    }
  };
  {
    /* eslint-disable */
  }
  useEffect(() => {
    if (slotData.parking) {
      makePost();
    }
  }, [slotData]);
  {
    /* eslint-enable */
  }
  const handle_submit = methods.handleSubmit(async (data) => {
    setSlotData({
      identification: data.identification,
      size: data.size,
      difficulty: data.difficulty,
      price: data.price,
      parking: parkingId,
    });
  });

  return (
    <div tw="flex-col py-6">
      <div>
        <FormInput
          label="Slot identification:"
          error={formState.errors.identification?.message.toString()}
          {...methods.register('identification', {
            required: 'Slot identification is required',
          })}
        />
      </div>
      <div>
        <Controller
          defaultValue={'1'}
          name="size"
          control={methods.control}
          rules={{
            required: 'Parking slot size is required',
          }}
          render={({ field, fieldState }) => {
            return (
              <FormSelect
                name="size"
                label="Select the parking slot size:"
                options={[
                  { label: 'Small', value: '1' },
                  { label: 'Medium', value: '2' },
                  { label: 'Large', value: '3' },
                ]}
                {...field}
                error={fieldState?.error?.message}
              />
            );
          }}
        />
      </div>
      <div>
        <Controller
          defaultValue={'easy'}
          name="difficulty"
          control={methods.control}
          rules={{
            required: 'Parking difficulty of the slot is required',
          }}
          render={({ field, fieldState }) => {
            return (
              <FormSelect
                name="difficulty"
                label="Select the parking difficulty of the slot:"
                options={[
                  { label: 'Easy', value: 'easy' },
                  { label: 'Medium', value: 'medium' },
                  { label: 'Hard', value: 'hard' },
                ]}
                {...field}
                error={fieldState?.error?.message}
              />
            );
          }}
        />
      </div>
      <div>
        <FormInput
          type="number"
          label="Price (€/day):"
          error={formState.errors.price?.message.toString()}
          {...methods.register('price', {
            required: 'Price is required',
            min: {
              value: 1,
              message: 'Minimum price is 1€/day',
            },
          })}
        />
      </div>

      <button tw="border bg-green-200 p-1 my-2" onClick={() => handle_submit()}>
        Create slot
      </button>
    </div>
  );
};
