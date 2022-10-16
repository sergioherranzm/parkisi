import { useForm, Controller, FormProvider } from 'react-hook-form';
import { FormSelect } from './form_widgets/FormSelect';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { MAPS_API_URL } from '../../lib/config';
import { ParkingList } from '../ParkingList';
import useSWR from 'swr';
import { useUser } from '@auth0/nextjs-auth0';
import { FormInput } from './form_widgets/FormInput';
import Link from 'next/link';
import { BiCurrentLocation } from 'react-icons/bi';
import { Button } from '../shared/Button';
import tw from 'twin.macro';
import { Box, Slider } from '@mui/material';

export const ReserveForm = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const { formState, watch } = methods;
  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );
  const userVehicles = userProfile?.vehicles;

  const [selectedCoordinates, setSelectedCoordinates] = useState<string[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [addressReady, setAddressReady] = useState<string | undefined>();
  const [isLimit, setIsLimit] = useState<number | number[]>();

  const address = watch('address');
  const vehicle = watch('vehicle');
  const limit = watch('limit');

  useEffect(() => {
    setSelectedVehicle(vehicle);
  }, [vehicle]);

  useEffect(() => {
    setIsLimit(limit);
  }, [limit]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (geopos) => {
        setSelectedCoordinates([
          geopos.coords.longitude.toString(),
          geopos.coords.latitude.toString(),
        ]);
        //------------------------------------------------------------------------------------------------------------------------------------------------
        setSelectedCoordinates(['-3.684771', '40.469208']); //***PLEASE DELETE*** This line is just to hide my real location when presenting the project.
        //------------------------------------------------------------------------------------------------------------------------------------------------
        setSelectedVehicle(vehicle);
        setAddressReady('OK');
      },
      (error) => {
        setAddressReady('ERROR_GEOPOS');
      }
    );
  };

  const handle_submit = methods.handleSubmit(async (data) => {
    const url = `${MAPS_API_URL}/getCoords?address=${address}`;
    const dataCoord: AxiosResponse = await axios.get(url);

    if (!dataCoord.data.error) {
      setSelectedCoordinates([
        dataCoord.data.lng.toString(),
        dataCoord.data.lat.toString(),
      ]);
      setSelectedVehicle(data.vehicle);
      setIsLimit(data.limit);
      setAddressReady('OK');
    } else {
      setAddressReady('ERROR_ADDRESS');
    }
  });

  const clear_address = () => {
    //methods.setValue('address', '');
    setAddressReady(undefined);
  };

  return (
    <>
      {userVehicles?.length > 0 && (
        <>
          <div tw="my-3 p-3 border border-primary-200 shadow-sm rounded-lg w-full">
            <FormProvider {...methods}>
              <div tw="flex w-full justify-between align-bottom">
                <div tw="w-full">
                  <Controller
                    defaultValue={userVehicles[0].plate}
                    name="vehicle"
                    control={methods.control}
                    rules={{
                      required: 'Select a vehicle',
                    }}
                    render={({ field, fieldState }) => {
                      return (
                        <FormSelect
                          name="vehicle"
                          label="Select vehicle:"
                          options={userVehicles.map((vehicle) => {
                            return {
                              label: vehicle.plate,
                              value: vehicle.plate,
                            };
                          })}
                          {...field}
                          error={fieldState?.error?.message}
                        />
                      );
                    }}
                  />
                </div>
                <div tw="w-full px-10">
                  <label
                    htmlFor="limit"
                    tw="p-1 first:font-bold text-primary-400"
                  >
                    Number of parkings:
                  </label>
                  <Controller
                    defaultValue={3}
                    name="limit"
                    control={methods.control}
                    rules={{
                      required: 'Select a number of parkings to display',
                    }}
                    render={({ field, fieldState }) => {
                      return (
                        <>
                          <Slider
                            name="limit"
                            aria-label="Number of parkings"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                            color="primary"
                            onChangeCommitted={(e, val) => {
                              setIsLimit(val);
                            }}
                            {...field}
                          />
                        </>
                      );
                    }}
                  />
                </div>
              </div>

              {addressReady !== 'OK' && (
                <>
                  <div tw="my-3 flex gap-3">
                    <div
                      tw="py-2 px-3 bg-gray-100 border border-primary-100 rounded-lg flex justify-center items-center text-primary-400"
                      onClick={() => getCurrentPosition()}
                    >
                      <BiCurrentLocation size={30} />
                    </div>

                    <FormInput
                      label="Insert an address:"
                      placeholder="Street, street number, locality, province, postal code"
                      error={formState.errors.address?.message.toString()}
                      {...methods.register('address', {
                        required: 'An address is required',
                      })}
                    />
                  </div>
                  <div tw="mt-3 flex gap-3">
                    <Button variant="submit" onClick={() => handle_submit()}>
                      Look for parkings
                    </Button>
                    {addressReady === 'ERROR_ADDRESS' && (
                      <p tw="text-secondary-400 font-bold text-lg pt-1">
                        Address not found. Please try a more specific address.
                      </p>
                    )}
                    {addressReady === 'ERROR_GEOPOS' && (
                      <p tw="text-secondary-400 font-bold text-lg pt-1">
                        We cannot detect current position. Please check your
                        browser permissions.
                      </p>
                    )}
                  </div>
                </>
              )}
              {addressReady === 'OK' && (
                <div tw="mt-3">
                  <Button variant="neutral" onClick={() => clear_address()}>
                    Change address
                  </Button>
                </div>
              )}
            </FormProvider>
          </div>

          {addressReady === 'OK' && (
            <div
              tw="my-3 p-3 border border-primary-200 shadow-sm rounded-lg w-full"
              style={{ scrollBehavior: 'smooth' }}
            >
              <ParkingList
                lng={selectedCoordinates[0]}
                lat={selectedCoordinates[1]}
                vehiclePlate={selectedVehicle}
                limitShow={isLimit as number}
              />
            </div>
          )}
        </>
      )}
      {userVehicles?.length === 0 && (
        <>
          <div tw="text-secondary-400 font-medium my-3">
            User`s vehicles not found
          </div>
          <div tw="text-secondary-400 font-medium my-3">
            <p tw="inline">Please register a vehicle in </p>
            <Link href={'/user/myProfile'}>
              <p tw="inline cursor-pointer underline hover:text-primary-200">
                your user profile
              </p>
            </Link>

            <p tw="inline"> to look for parkings</p>
          </div>
        </>
      )}
    </>
  );
};
