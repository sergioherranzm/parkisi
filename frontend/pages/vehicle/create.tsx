import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { SlotForm } from '../../components/forms/SlotForm';

const Page = () => {
  const router = useRouter();
  const {
    query: { parkingId },
  } = router;

  const { data: parking } = useSWR(
    parkingId ? `/parking/detail/${parkingId}` : null
  );

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const isOwner = parking?.owner === userProfile?._id;

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
        {isOwner && (
          <>
            <p>WIP</p>
          </>
        )}
        {!isOwner && <p>WIP</p>}
      </div>
    </>
  );
};

export default Page;