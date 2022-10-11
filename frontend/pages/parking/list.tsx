import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const {
    query: { newParking },
  } = router;
  const { user } = useUser();
  const { data: myParkings } = useSWR(
    user?.sub ? `/parking/list/${user?.sub}` : null
  );

  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">MY PUBLISHED PARKINGS</h1>
        {newParking && (
          <div tw="text-green-500 bg-green-300">New parking created</div>
        )}

        <div tw="my-2">
          {myParkings?.length > 0 &&
            myParkings.map((parking) => (
              <div
                key={parking._id}
                tw="border border-black shadow-lg p-3 rounded-lg bg-white"
              >
                <h4 tw="text-2xl">Address: {parking.address} street</h4>
                <p tw="text-gray-500">Postal Code: {parking.postalCode}</p>
                <p>Number of parking slots: {parking.slots.length}</p>
                <button
                  tw="border border-black bg-gray-300"
                  onClick={() => router.push(`/parking/${parking._id}`)}
                >
                  See details
                </button>
              </div>
            ))}
          {!myParkings?.length && <p>You have no parking pusblished yet</p>}
        </div>
      </div>
      <button
        tw="border border-black bg-gray-300 p-5 text-xl"
        onClick={() => router.push('/parking/create')}
      >
        Add new parking
      </button>
    </>
  );
};

export default Page;
