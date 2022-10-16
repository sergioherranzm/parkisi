import { useUser } from '@auth0/nextjs-auth0';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import useSWR from 'swr';
import { PROXY_URL } from '../../lib/config';
import { IVehicle } from '../../types/IVehicle';
import { Button } from '../shared/Button';
import { CarSmall } from '../shared/CarSmall';
import { FormInput } from './form_widgets/FormInput';
import { FormSelect } from './form_widgets/FormSelect';
import { motion } from 'framer-motion';
import { CarMedium } from '../shared/CarMedium';
import { CarLarge } from '../shared/CarLarge';
import { MotorbikeSmall } from '../shared/MotorbikeSmall';
import { MotorbikeMedium } from '../shared/MotorbikeMedium';
import { MotorbikeLarge } from '../shared/MotorbikeLarge';
import { OtherVehicle } from '../shared/OtherVehicle';
import { Alert } from '@mui/material';

export const VehicleFormUpdate = () => {
  const router = useRouter();
  const {
    query: { vehicle_id },
  } = router;

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const { data: vehicle } = useSWR(
    vehicle_id ? `/vehicle/detail/${vehicle_id}` : null
  );

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      type: vehicle?.type,
      size: vehicle?.size.toString(),
      model: vehicle?.model,
      plate: vehicle?.plate,
    },
  });
  const { formState, watch } = methods;

  const plateData = watch('plate');
  const modelData = watch('model');
  const typeData = watch('type');
  const sizeData = watch('size');

  const [vehicleData, setVehicleData] = useState<IVehicle>({});
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const makePost = async () => {
    const url = `${PROXY_URL}/vehicle/detail/${vehicle?._id}`;
    const postResponse: AxiosResponse = await axios.post(url, vehicleData);
    if (postResponse.status === 200) {
      // Send mail to user
      // Aler user
      setIsUpdated(true);
    } else {
      throw new Error('Vehicle update failed');
    }
  };
  {
    /* eslint-disable */
  }
  useEffect(() => {
    if (vehicleData.owner) {
      makePost();
    }
  }, [vehicleData]);
  {
    /* eslint-enable */
  }
  const handle_submit = methods.handleSubmit(async (data) => {
    setVehicleData({
      type: data.type,
      size: data.size,
      plate: data.plate.toUpperCase(),
      model: data.model,
      owner: userProfile._id,
    });
  });

  return (
    <div tw="w-full flex gap-3">
      <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg w-full">
        {isUpdated && (
          <Alert tw="my-2" severity="info">
            Profile updated!
          </Alert>
        )}
        <div tw="flex gap-5 w-full my-1">
          <div tw="w-1/2">
            <Controller
              defaultValue={vehicle?.type}
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
          <div tw="w-1/2">
            <Controller
              defaultValue={vehicle?.size.toString()}
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
        </div>

        <div tw="my-1">
          <FormInput
            label="Vehicle model:"
            placeholder="Audi A3 blue"
            error={formState.errors.model?.message.toString()}
            {...methods.register('model', {
              value: vehicle?.model,
              required: 'Model is required',
              minLength: {
                value: 4,
                message: 'Model too short (min 4 characters)',
              },
            })}
          />
        </div>
        <div tw="my-1">
          <FormInput
            label="Vehicle plate number:"
            placeholder="1234ABC"
            error={formState.errors.plate?.message.toString()}
            {...methods.register('plate', {
              value: vehicle?.plate,
              required: 'Plate number is required',
              minLength: {
                value: 7,
                message: 'Plate number too short (min 7 characters)',
              },
            })}
          />
        </div>
      </div>
      <div tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col justify-between">
        <div tw="rounded-lg flex flex-col justify-center items-center">
          {typeData === 'car' && sizeData === '1' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
            >
              <CarSmall fillColor="#A7383E" height="80" width="80" />
            </motion.div>
          )}
          {typeData === 'car' && sizeData === '2' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
            >
              <CarMedium fillColor="#A7383E" height="80" width="80" />
            </motion.div>
          )}
          {typeData === 'car' && sizeData === '3' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
            >
              <CarLarge fillColor="#A7383E" height="80" width="80" />
            </motion.div>
          )}
          {typeData === 'motorbike' && sizeData === '1' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
            >
              <MotorbikeSmall fillColor="#A7383E" height="80" width="80" />
            </motion.div>
          )}
          {typeData === 'motorbike' && sizeData === '2' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
            >
              <MotorbikeMedium fillColor="#A7383E" height="80" width="80" />
            </motion.div>
          )}
          {typeData === 'motorbike' && sizeData === '3' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
            >
              <MotorbikeLarge fillColor="#A7383E" height="80" width="80" />
            </motion.div>
          )}
          {typeData === 'other' && (
            <motion.div
              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
              transition={{ duration: 1 }}
              tw="mb-3"
            >
              <OtherVehicle fillColor="#A7383E" height="60" width="60" />
            </motion.div>
          )}

          <div tw="border bg-white border-gray-500 rounded flex max-w-min shadow-md h-6">
            <div
              tw="bg-blue-800 w-4 rounded-l"
              style={{ margin: '-1px' }}
            ></div>
            <div tw="text-black text-center px-2 leading-5 uppercase font-bold">
              {plateData}
            </div>
          </div>
          <div tw="mt-3 text-primary-400 font-semibold text-center">
            {modelData}
          </div>
        </div>
        <div tw="mt-3 flex justify-center">
          <Button variant="submit" onClick={() => handle_submit()}>
            Update vehicle
          </Button>
        </div>
      </div>
    </div>
  );
};
