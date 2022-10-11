import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const {
    query: { vehicle_id },
  } = router;

  const { data: vehicle } = useSWR(
    vehicle_id ? `/vehicle/detail/${vehicle_id}` : null
  );

  return (
    <>
      <div tw=" mx-auto ">
        <button
          tw="border border-black bg-gray-300 p-1"
          onClick={() => router.push(`/user/myProfile`)}
        >
          Back
        </button>
        <h1 tw="text-4xl font-extrabold">VEHICLE DETAIL</h1>
        <div tw="my-2">
          {vehicle && (
            <div tw=" p-3 rounded-lg bg-white">
              <h4 tw="text-4xl">{vehicle.plate}</h4>
              <p tw="text-gray-500">Model: {vehicle.model}</p>
              <p>Type: {vehicle.type}</p>
              <p>Size: {vehicle.size}</p>
              <p>
                WIP: WIP: Put in form mode to allow modification of certain
                fields
              </p>
            </div>
          )}
          {!vehicle && <p>Vehicle not found</p>}
        </div>
      </div>
    </>
  );
};

export default Page;
