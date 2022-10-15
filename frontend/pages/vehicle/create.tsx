import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { VehicleForm } from '../../components/forms/VehicleForm';

const Page = () => {
  const router = useRouter();

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  return (
    <>
      <button
        tw="border border-black bg-gray-300 p-1"
        onClick={() => router.push(`/user/myProfile`)}
      >
        Back
      </button>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">CREATE VEHICLE</h1>
        <VehicleForm />
      </div>
    </>
  );
};

export default withPageAuthRequired(Page);
