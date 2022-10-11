import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const { data: myVehicles } = useSWR(
    user?.sub ? `/vehicle/list/${user?.sub}` : null
  );

  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">MY VEHICLES</h1>
        <div tw="my-2">
          {myVehicles?.length > 0 &&
            myVehicles.map((vehicle) => (
              <div
                key={vehicle._id}
                tw="border border-black shadow-lg p-3 rounded-lg bg-white"
              >
                <h4 tw="text-2xl">Plate number: {vehicle.plate}</h4>
                <h4 tw="text-xl">Model: {vehicle.model}</h4>
                <p>Type: {vehicle.type}</p>
                <p>Size: {vehicle.size}</p>
                <button tw="border border-black bg-gray-300">Delete</button>
              </div>
            ))}
          {!myVehicles?.length && <p>You have no vehicles yet</p>}
        </div>
      </div>
      <button
        tw="border border-black bg-gray-300 p-5 text-xl"
        onClick={() => router.push('/vehicle/create')}
      >
        Add new vehicle
      </button>
    </>
  );
};

export default Page;
