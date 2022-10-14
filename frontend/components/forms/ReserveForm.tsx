import { useForm, Controller, FormProvider } from 'react-hook-form';
import { FormSelect } from './form_widgets/FormSelect';
import { useEffect, useState } from 'react';
import { DateRangePickerWidget } from './form_widgets/DateRangePickerWidget';
import axios, { AxiosResponse } from 'axios';
import { MAPS_API_URL } from '../../lib/config';
import { ParkingList } from '../ParkingList';
import useSWR from 'swr';
import { useUser } from '@auth0/nextjs-auth0';
import { FormInput } from './form_widgets/FormInput';

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

  const address = watch('address');
  const vehicle = watch('vehicle');

  useEffect(() => {
    setSelectedVehicle(vehicle);
  }, [vehicle]);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (geopos) => {
        setSelectedCoordinates([
          geopos.coords.longitude.toString(),
          geopos.coords.latitude.toString(),
        ]);
        //------------------------------------------------------------------------------------------------------------------------------------------------
        setSelectedCoordinates(['-3.703206', '40.420133']); //***PLEASE DELETE*** This line is just to hide my real location when presenting the project.
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
      setAddressReady('OK');
    } else {
      setAddressReady('ERROR_ADRESS');
    }
  });

  const clear_address = () => {
    setAddressReady(undefined);
  };

  return (
    <>
      {userVehicles?.length > 0 && (
        <>
          <FormProvider {...methods}>
            <div tw="flex-col py-6 gap-2">
              <div>
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
                          return { label: vehicle.plate, value: vehicle.plate };
                        })}
                        {...field}
                        error={fieldState?.error?.message}
                      />
                    );
                  }}
                />
              </div>
              {addressReady !== 'OK' && (
                <>
                  <div tw="flex">
                    <button
                      tw="border bg-yellow-200 p-1 m-2"
                      onClick={() => getCurrentPosition()}
                    >
                      Detect my position
                    </button>
                    <FormInput
                      label="Insert an address:"
                      error={formState.errors.address?.message.toString()}
                      {...methods.register('address', {
                        required: 'An address is required',
                      })}
                    />
                  </div>
                  <button
                    tw="border bg-green-200 p-1 my-2"
                    onClick={() => handle_submit()}
                  >
                    View available parkings
                  </button>
                </>
              )}
              {addressReady === 'OK' && (
                <>
                  <button
                    tw="border bg-yellow-200 p-1 my-2"
                    onClick={() => clear_address()}
                  >
                    Clear address selection
                  </button>
                </>
              )}
            </div>
            {addressReady === 'ERROR_ADDRESS' && (
              <p tw="text-red-600 font-bold text-lg">Address not found</p>
            )}
            {addressReady === 'ERROR_GEOPOS' && (
              <p tw="text-red-600 font-bold text-lg">
                We cannot detect current position. Please check your browser
                permissions.
              </p>
            )}
            {addressReady === 'OK' && (
              <>
                <h2 tw="text-2xl">Pakings near the selected address:</h2>
                <ParkingList
                  lng={selectedCoordinates[0]}
                  lat={selectedCoordinates[1]}
                  vehiclePlate={selectedVehicle}
                />
              </>
            )}
          </FormProvider>
        </>
      )}
      {userVehicles?.length === 0 && (
        <div>
          Please register a vehicle in your user profile to do a reserve.
        </div>
      )}
    </>
  );
};
