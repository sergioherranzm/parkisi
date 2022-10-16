import { useUser } from '@auth0/nextjs-auth0';
import axios, { AxiosResponse } from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useSWR from 'swr';
import tw from 'twin.macro';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { difficultyMap } from '../../types/difficultyMap';
import { ISlot } from '../../types/ISlot';
import { Button } from '../shared/Button';
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

  const methods = useForm({ mode: 'onSubmit' });
  const { formState, watch } = methods;

  const identificationData = watch('identification');
  const sizeData = watch('size');
  const difficultyData = watch('difficulty');
  const priceData = watch('price');

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
    if (slotData?.parking) {
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
    <AnimatePresence>
      <div tw="w-full flex gap-3">
        <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg w-full">
          <div tw="mt-1">
            <FormInput
              label="Slot identification:"
              placeholder="Id of this slot in the parking"
              error={formState.errors.identification?.message.toString()}
              {...methods.register('identification', {
                required: 'Slot identification is required',
              })}
            />
          </div>
          <div tw="my-1">
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
          <div tw="my-1">
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
          <div tw="my-1">
            <FormInput
              type="number"
              placeholder="Price of the slot in € for 1 day"
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
        </div>
        <div tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col gap-2 min-w-max">
          <div tw="rounded-lg flex flex-col justify-center items-center gap-3">
            <div tw="text-secondary-400 font-bold text-center text-4xl">
              <p css={[tw`inline`, !identificationData && tw`hidden`]}>Slot </p>
              <p tw="inline">{identificationData}</p>
            </div>
            <div tw="text-primary-400 text-center font-medium text-2xl flex">
              <div
                css={[
                  tw`max-w-min p-1 border-4 border-transparent transition-all cursor-pointer`,
                  sizeData === '1' &&
                    tw`border-secondary-300 text-secondary-300 font-extrabold`,
                ]}
                onClick={() => methods.setValue('size', '1')}
              >
                S
              </div>
              <div
                css={[
                  tw`max-w-min p-1 border-4 border-transparent transition-all cursor-pointer`,
                  sizeData === '2' &&
                    tw`border-secondary-300 text-secondary-300 font-extrabold`,
                ]}
                onClick={() => methods.setValue('size', '2')}
              >
                M
              </div>
              <div
                css={[
                  tw`max-w-min p-1 border-4 border-transparent transition-all cursor-pointer`,
                  sizeData === '3' &&
                    tw`border-secondary-300 text-secondary-300 font-extrabold`,
                ]}
                onClick={() => methods.setValue('size', '3')}
              >
                L
              </div>
            </div>

            <div tw=" text-center text-2xl">
              <motion.div
                key={difficultyData}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.1,
                }}
                tw="text-secondary-300 inline font-bold"
              >
                {difficultyMap[difficultyData]}
              </motion.div>
              <p tw="text-primary-300 inline font-normal"> to park</p>
            </div>
            <div tw="text-center text-2xl">
              <p tw="text-secondary-300 inline font-bold ">
                {priceData?.replace('.', ',')}
              </p>
              <p tw="text-primary-300 inline font-normal"> €/day</p>
            </div>
          </div>
          <div tw="mt-3 flex justify-center">
            <Button variant="submit" onClick={() => handle_submit()}>
              Create slot
            </Button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
