import { useForm, Controller, FormProvider } from 'react-hook-form';
import { FormSelect } from './form_widgets/FormSelect';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { DateRangePickerWidget } from './form_widgets/DateRangePickerWidget';
import axios, { AxiosResponse } from 'axios';
import { MAPS_API_URL } from '../../lib/config';
import { ParkingList } from '../ParkingList';
import { IParking } from '../../types/IParking';

export const ReserveForm = () => {
  const router = useRouter();

  const methods = useForm({
    mode: 'onSubmit',
  });

  const { formState, watch } = methods;

  const [selectedCoordinates, setSelectedCoordinates] = useState<string[]>([]);
  const [addressReady, setAddressReady] = useState<string>('');

  const address = watch('address');

  useEffect(() => {
    setAddressReady('');
  }, [address]);

  const handle_submit = methods.handleSubmit(async (data) => {
    console.log(data);

    const url = `${MAPS_API_URL}/getCoords?address=${address}`;

    const dataCoord: AxiosResponse = await axios.get(url);

    if (!dataCoord.data.error) {
      console.log(dataCoord.data);
      setSelectedCoordinates([
        dataCoord.data.lng.toString(),
        dataCoord.data.lat.toString(),
      ]);
      setAddressReady('OK');
    } else {
      setAddressReady('ERROR');
    }
  });

  return (
    <>
      <FormProvider {...methods}>
        <div tw="flex-col py-6 gap-2">
          <div>
            <Controller
              name="period"
              control={methods.control}
              render={(props) => {
                return <DateRangePickerWidget {...props} />;
              }}
            />
          </div>
          <div>
            <Controller
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
                    options={[
                      { label: 'XXXXYYY', value: 'XXXXYYY' },
                      { label: 'ZZZZZZZZ', value: 'ZZZZZZZZ' },
                    ]}
                    {...field}
                    error={fieldState?.error?.message}
                  />
                );
              }}
            />
          </div>
          <div>
            <label htmlFor="address">Select address:</label>
            <input
              type="text"
              tw="border rounded-lg p-2"
              {...methods.register('address')}
            />
          </div>
          <button tw="border bg-green-200 p-1" onClick={() => handle_submit()}>
            View available parkings
          </button>
        </div>
        {addressReady === 'ERROR' && (
          <p tw="text-red-600 font-bold text-lg">Address not found</p>
        )}
        {addressReady === 'OK' && (
          <>
            <h2 tw="text-2xl">Pakings near the selected address:</h2>
            <ParkingList
              lng={selectedCoordinates[0]}
              lat={selectedCoordinates[1]}
            />
          </>
        )}
      </FormProvider>
    </>
  );
};
