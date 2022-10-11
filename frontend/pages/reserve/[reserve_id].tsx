import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const {
    query: { reserve_id },
  } = router;

  const { data } = useSWR(reserve_id ? `/reserve/detail/${reserve_id}` : null);
  const reserveWithParking = data?.reserveWithParking;
  const reserveWithVehicle = data?.reserveWithVehicle;

  return (
    <>
      <div tw=" mx-auto ">
        <button
          tw="border border-black bg-gray-300 p-1"
          onClick={() => router.push(`/reserve/list`)}
        >
          Back
        </button>
        <h1 tw="text-4xl font-extrabold">RESERVE DETAIL</h1>
        <div tw="my-2">
          {reserveWithParking && reserveWithVehicle && (
            <>
              <div tw="p-3 rounded-lg bg-white">
                <h4 tw="text-4xl">
                  Reserve on {reserveWithParking.slot?.parking.address}
                </h4>
                <h4 tw="text-2xl">
                  {' '}
                  Period: from {reserveWithParking.period[0]} to{' '}
                  {
                    reserveWithParking.period[
                      reserveWithParking.period.length - 1
                    ]
                  }
                </h4>
                <p>Slot: {reserveWithParking.slot?.identification}</p>
                <p>Vehicle: {reserveWithVehicle.vehicle?.plate}</p>
                <button
                  tw="border border-black bg-gray-300 p-1"
                  onClick={() => router.push(`#`)}
                >
                  Cancel reserve
                </button>
              </div>
            </>
          )}
          {(!reserveWithParking || !reserveWithVehicle) && (
            <p>Reserve not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
