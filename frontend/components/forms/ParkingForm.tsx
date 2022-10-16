import { useUser } from '@auth0/nextjs-auth0';
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
import tw from 'twin.macro';
import { Button } from '../shared/Button';

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
  const [isSearched, setIsSearched] = useState<boolean>(false);

  let street = watch('street');
  let streetNumber = watch('streetNumber');
  let postal = watch('postal');
  let city = watch('city');
  let province = watch('province');

  const makePost = async () => {
    const url = `${PROXY_URL}/parking`;
    const postResponse: AxiosResponse = await axios.post(url, parkingData);
    if (postResponse.status === 200) {
      //send mail
      const mailType = 'parkingCreation';
      const mailTo = userProfile.email;
      const address = parkingData.street + ' ' + parkingData.streetNumber;
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
  {
    /* eslint-disable */
  }
  useEffect(() => {
    if (isSearched) {
      setAddressReady('OK');
      setIsSearched(false);
    } else {
      setAddressReady('');
    }
  }, [street, streetNumber, postal, city, province]);

  useEffect(() => {
    if (parkingData.owner) {
      makePost();
    }
  }, [parkingData]);
  {
    /* eslint-enable */
  }

  const handle_submit1 = methods.handleSubmit(async (data) => {
    setIsSearched(true);

    const url = `${MAPS_API_URL}/getCoords?address=${
      street + ' ' + streetNumber + ' ' + postal + ' ' + city + ' ' + province
    }`;
    const dataCoord: AxiosResponse = await axios.get(url);

    if (!dataCoord.data.error) {
      const url2 = `${MAPS_API_URL}/getAddress?lng=${dataCoord.data.lng}&lat=${dataCoord.data.lat}`;
      const dataAddress: AxiosResponse = await axios.get(url2);

      if (!dataAddress.data.error) {
        methods.setValue('street', dataAddress.data.street);
        methods.setValue('streetNumber', dataAddress.data.streetNumber);
        methods.setValue('postal', dataAddress.data.postal);
        methods.setValue('city', dataAddress.data.city);
        methods.setValue('province', dataAddress.data.state);
        setParkingData({
          street: dataAddress.data.street,
          streetNumber: dataAddress.data.streetNumber,
          postalCode: dataAddress.data.postal,
          city: dataAddress.data.city,
          province: dataAddress.data.state,
          location: {
            type: 'Point',
            coordinates: [dataCoord.data.lng, dataCoord.data.lat],
          },
          image: `https://maps.googleapis.com/maps/api/staticmap?size=400x400&zoom=17&scale=1&format=png&maptype=roadmap&key=${GOOGLE_API_KEY}&markers=size:normal%7Ccolor:purple%7Clabel:P%7C${dataCoord.data.lat},${dataCoord.data.lng}`,
        });
      } else {
        setIsSearched(false);
        setAddressReady('ERROR');
      }
    } else {
      setIsSearched(false);
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

  const clear_form = () => {
    methods.setValue('street', '');
    methods.setValue('streetNumber', '');
    methods.setValue('postal', '');
    methods.setValue('city', '');
    methods.setValue('province', '');
    methods2.setValue('description', '');
    setAddressReady('');
    setIsSearched(false);
  };

  return (
    <div tw="my-1 w-full flex gap-3">
      <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg w-full">
        <div tw="flex gap-5 w-full my-1">
          <div tw="w-2/3">
            <FormInput
              label="Street:"
              placeholder="Street name"
              error={formState.errors.street?.message.toString()}
              {...methods.register('street', {
                required: 'Address required',
              })}
            />
          </div>
          <div tw="w-1/3">
            <FormInput
              label="Street number:"
              placeholder="Street number"
              error={formState.errors.streetNumber?.message.toString()}
              {...methods.register('streetNumber')}
            />
          </div>
        </div>
        <div tw="my-1">
          <FormInput
            label="City/Locality:"
            placeholder="City name"
            error={formState.errors.city?.message.toString()}
            {...methods.register('city', {
              required: 'City required',
            })}
          />
        </div>
        <div tw="flex gap-5 w-full my-1">
          <div tw="w-1/2">
            <FormInput
              label="Province:"
              placeholder="Province/state"
              error={formState.errors.province?.message.toString()}
              {...methods.register('province')}
            />
          </div>
          <div tw="w-1/2">
            <FormInput
              label="Postal code:"
              placeholder="Postal code"
              error={formState.errors.postal?.message.toString()}
              {...methods.register('postal')}
            />
          </div>
        </div>
        {addressReady !== 'OK' && (
          <div tw="mt-3 flex gap-3">
            <Button variant="submit" onClick={() => handle_submit1()}>
              Search address
            </Button>
            <Button variant="neutral" onClick={() => clear_form()}>
              Clear form
            </Button>
            {addressReady === 'ERROR' && (
              <p tw="text-secondary-400 font-bold text-lg pt-1">
                Address not found. Please try a more specific address.
              </p>
            )}
          </div>
        )}
        {addressReady === 'OK' && (
          <>
            <div tw="my-1">
              <FormTextarea
                label="Parking description"
                placeholder="Short description of the parking assets"
                error={formState2.errors.description?.message.toString()}
                {...methods2.register('description', {
                  required: 'Please insert a parking description',
                  minLength: {
                    value: 10,
                    message: 'Description too short (min 10 characters)',
                  },
                })}
              />
            </div>
            <div tw="mt-3 flex gap-3">
              <Button variant="submit" onClick={() => handle_submit2()}>
                Create parking
              </Button>
              <Button variant="neutral" onClick={() => clear_form()}>
                Clear form
              </Button>
            </div>
          </>
        )}
      </div>

      <div
        css={[
          tw`my-2 p-1 border border-primary-200 shadow-sm rounded-lg flex justify-between items-center`,
          addressReady !== 'OK' && tw`hidden`,
        ]}
      >
        {addressReady === 'OK' && (
          <StaticMap
            size="600x600"
            zoom={16}
            markers={[
              {
                coordinates: parkingData?.location?.coordinates,
                color: 'purple',
                label: 'P',
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};
