import { useUser } from '@auth0/nextjs-auth0';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { IVehicle } from '../../types/IVehicle';
import { FormInput } from './form_widgets/FormInput';
import { FormSelect } from './form_widgets/FormSelect';

export const VehicleForm = () => {
  const router = useRouter();

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const methods = useForm();
  const { formState, watch } = methods;

  const [vehicleData, setVehicleData] = useState<IVehicle>({});

  const makePost = async () => {
    const url = `${PROXY_URL}/vehicle`;
    const postResponse: AxiosResponse = await axios.post(url, vehicleData);
    if (postResponse.status === 200) {
      //send mail
      const mailType = 'vehicleCreation';
      const mailTo = userProfile.email;
      const model = vehicleData.model;
      const plate = vehicleData.plate;
      const hyperlink = `${FRONT_URL}user/myProfile`;
      const url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&model=${model}&plate=${plate}&hyperlink=${hyperlink}`;
      const sendMailResponse: AxiosResponse = await axios.get(url_mail);
      //redirection
      router.push(`/user/myProfile?newVehicle=${postResponse.data.vehicleId}`);
    } else {
      throw new Error('Vehicle creation failed');
    }
  };

  useEffect(() => {
    if (vehicleData.owner) {
      makePost();
    }
  }, [vehicleData]);

  const handle_submit = methods.handleSubmit(async (data) => {
    setVehicleData({
      type: data.type,
      size: data.size,
      plate: data.plate,
      model: data.model,
      owner: userProfile._id,
    });
  });

  return (
    <div tw="flex-col py-6">
      <div>
        <Controller
          defaultValue={'car'}
          name="type"
          control={methods.control}
          rules={{
            required: 'Vehicle type is required',
          }}
          render={({ field, fieldState }) => {
            return (
              <FormSelect
                name="type"
                label="Select the vehicle type:"
                options={[
                  { label: 'Car', value: 'car' },
                  { label: 'Motorbike', value: 'motorbike' },
                  { label: 'Other', value: 'other' },
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
          defaultValue={'1'}
          name="size"
          control={methods.control}
          rules={{
            required: 'Vehicle size is required',
          }}
          render={({ field, fieldState }) => {
            return (
              <FormSelect
                name="size"
                label="Select the vehicle size:"
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
        <FormInput
          label="Vehicle model:"
          error={formState.errors.model?.message.toString()}
          {...methods.register('model', {
            required: 'Model is required',
            minLength: {
              value: 4,
              message: 'Model too short (min 4 characters)',
            },
          })}
        />
      </div>
      <div>
        <FormInput
          label="Vehicle plate number:"
          error={formState.errors.plate?.message.toString()}
          {...methods.register('plate', {
            required: 'Plate number is required',
            minLength: {
              value: 7,
              message: 'Palte number too short (min 7 characters)',
            },
          })}
        />
      </div>

      <button tw="border bg-green-200 p-1 my-2" onClick={() => handle_submit()}>
        Create vehicle
      </button>
    </div>
  );
};
