import { RequestError, useUser } from '@auth0/nextjs-auth0';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import {
  FRONT_URL,
  GOOGLE_API_KEY,
  MAILER_URL,
  MAPS_API_URL,
  PROXY_URL,
} from '../../lib/config';
import { StaticMap } from '../maps/StaticMap';
import { FormInput } from './form_widgets/FormInput';
import { FormTextarea } from './form_widgets/FormTextArea';
import { IParking } from '../../types/IParking';

export const ParkingForm = () => {
  const router = useRouter();
  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );
  const methods = useForm();
  const methods2 = useForm();
  const { formState, watch } = methods;
  const { formState: formState2, watch: watch2 } = methods2;

  const [parkingData, setParkingData] = useState<IParking>({});
  const [addressReady, setAddressReady] = useState<string>('');

  const address = watch('address');
  const postal = watch('postal');
  const city = watch('city');
  const province = watch('province');

  const makePost = async () => {
    const url = `${PROXY_URL}/parking`;
    const postResponse: AxiosResponse = await axios.post(url, parkingData);
    if (postResponse.status === 200) {
      //send mail
      const mailType = 'parkingCreation';
      const mailTo = userProfile.email;
      const address = parkingData.address;
      const description = parkingData.description;
      const hyperlink = `${FRONT_URL}parking/list`;
      const url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&description=${description}&hyperlink=${hyperlink}`;
      const sendMailResponse: AxiosResponse = await axios.get(url_mail);
      //redirection
      router.push(`/parking/list?newParking=${postResponse.data.parkingId}`);
    } else {
      throw new Error('Parking creation failed');
    }
  };

  useEffect(() => {
    setAddressReady('');
  }, [address, postal, city, province]);

  {
    /* eslint-disable */
  }
  useEffect(() => {
    if (parkingData.owner) {
      makePost();
    }
  }, [parkingData]);
  {
    /* eslint-enable */
  }

  const handle_submit1 = methods.handleSubmit(async (data) => {
    const url = `${MAPS_API_URL}/getCoords?address=${
      address + ' ' + postal + ' ' + city + ' ' + province
    }`;

    const dataCoord: AxiosResponse = await axios.get(url);

    if (!dataCoord.data.error) {
      setParkingData({
        address: data.address,
        postalCode: data.postal,
        city: data.city,
        province: data.province,
        location: {
          type: 'Point',
          coordinates: [dataCoord.data.lng, dataCoord.data.lat],
        },
        image: `https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=17&scale=1&format=png&maptype=roadmap&key=${GOOGLE_API_KEY}&markers=size:normal%7Ccolor:purple%7Clabel:P%7C${dataCoord.data.lat},${dataCoord.data.lng}`,
      });
      setAddressReady('OK');
    } else {
      setAddressReady('ERROR');
    }
  });

  const handle_submit2 = methods2.handleSubmit(async (data) => {
    setParkingData({
      ...parkingData,
      description: data.description,
      owner: userProfile._id,
    });
  });

  return (
    <>
      <div tw="flex-col py-6">
        <div>
          <FormInput
            label="Address:"
            error={formState.errors.address?.message.toString()}
            {...methods.register('address', {
              required: 'Address required',
            })}
          />
        </div>
        <div>
          <FormInput
            label="Postal code:"
            error={formState.errors.postal?.message.toString()}
            {...methods.register('postal')}
          />
        </div>
        <div>
          <FormInput
            label="City:"
            error={formState.errors.city?.message.toString()}
            {...methods.register('city')}
          />
        </div>
        <div>
          <FormInput
            label="Province:"
            error={formState.errors.province?.message.toString()}
            {...methods.register('province')}
          />
        </div>
        {addressReady !== 'OK' && (
          <button tw="border bg-green-200 p-1" onClick={() => handle_submit1()}>
            Search address
          </button>
        )}
        <button
          tw="border bg-green-200 p-1 mx-5"
          onClick={() => alert('form creared')}
        >
          Clear form
        </button>
      </div>
      {addressReady === 'ERROR' && (
        <p tw="text-red-600 font-bold text-lg">Address not found</p>
      )}
      {addressReady === 'OK' && (
        <div>
          <div>
            <StaticMap
              size="600x400"
              zoom={16}
              markers={[
                {
                  coordinates: parkingData.location.coordinates,
                  color: 'purple',
                  label: 'P',
                },
              ]}
            />
          </div>
          <div>
            <FormTextarea
              label="Parking description"
              error={formState2.errors.description?.message.toString()}
              {...methods2.register('description', {
                required: 'Please insert a parking description',
                minLength: {
                  value: 20,
                  message: 'Description too short (min 20 characters)',
                },
              })}
            />
          </div>
          <button tw="border bg-green-200 p-1" onClick={() => handle_submit2()}>
            Create parking
          </button>
        </div>
      )}
    </>
  );
};
