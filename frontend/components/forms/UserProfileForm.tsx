import { useUser } from '@auth0/nextjs-auth0';
import { Alert } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { PROXY_URL } from '../../lib/config';
import { Button } from '../shared/Button';
import { FormInput } from './form_widgets/FormInput';
import { FormTextarea } from './form_widgets/FormTextArea';

export const UserProfileForm = () => {
  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const methods = useForm({
    mode: 'onSubmit',
  });
  const { formState, watch } = methods;

  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  const handle_submit = methods.handleSubmit(async (data) => {
    const url = `${PROXY_URL}/userProfile/detail/${userProfile?._id}`;
    const postResponse: AxiosResponse = await axios.post(url, data);
    if (postResponse.status === 200) {
      // Send mail to user
      // Aler user
      setIsUpdated(true);
    } else {
      throw new Error('Profile update failed');
    }
  });

  return (
    <div tw="w-full">
      {isUpdated && (
        <Alert tw="my-2" severity="info">
          Profile updated!
        </Alert>
      )}
      <div tw="mb-1">
        <FormInput
          name="nickname"
          label="Username:"
          value={userProfile.nickname}
          disabled={true}
        />
      </div>
      <div tw="flex gap-5 w-full my-1">
        <div tw="w-1/2">
          <FormInput
            label="Firstname:"
            placeholder="Your firstname"
            error={formState.errors.name?.message.toString()}
            {...methods.register('name', {
              value: userProfile.name,
            })}
          />
        </div>
        <div tw="w-1/2">
          <FormInput
            label="Surname:"
            placeholder="Your surname"
            error={formState.errors.surname?.message.toString()}
            {...methods.register('surname', {
              value: userProfile.surname,
            })}
          />
        </div>
      </div>
      <div tw="my-1">
        <FormInput
          name="email"
          label="Email:"
          value={userProfile.email}
          disabled={true}
        />
      </div>
      <div tw="my-1">
        <FormInput
          label="Phone number:"
          type="number"
          placeholder="000000000"
          error={formState.errors.phone?.message.toString()}
          {...methods.register('phone', {
            value: userProfile.phone,
          })}
        />
      </div>
      <div tw="my-1">
        <FormTextarea
          label="My description:"
          placeholder="Your description"
          error={formState.errors.description?.message.toString()}
          {...methods.register('description', {
            value: userProfile.description,
          })}
        />
      </div>
      <div tw="mt-3">
        <Button variant="submit" onClick={() => handle_submit()}>
          Update profile
        </Button>
      </div>
    </div>
  );
};
