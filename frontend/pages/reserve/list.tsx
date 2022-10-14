import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const {
    query: { newReserve, deleteReserve },
  } = router;
  const { user } = useUser();
  const { data: myReserves } = useSWR(
    user?.sub ? `/reserve/list/user/${user?.sub}` : null
  );

  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">MY RESERVES</h1>
        {newReserve && (
          <div tw="text-green-500 bg-green-300">New reserve created</div>
        )}
        {deleteReserve && (
          <div tw="text-green-500 bg-green-300">Reserve deleted</div>
        )}
        <div tw="my-2">
          {myReserves?.length > 0 &&
            myReserves.map((reserve) => (
              <div
                key={reserve._id}
                tw="border border-black shadow-lg p-3 rounded-lg bg-white my-1"
              >
                {newReserve === reserve._id && (
                  <div tw="text-green-500 bg-green-300">NEW</div>
                )}
                <h4 tw="text-2xl">Parking on {reserve.slot.parking.address}</h4>
                <p>
                  Period: from {reserve.period[0]} to{' '}
                  {reserve.period[reserve.period.length - 1]}
                </p>
                <button
                  tw="border border-black bg-gray-300"
                  onClick={() => router.push(`/reserve/${reserve._id}`)}
                >
                  Open
                </button>
              </div>
            ))}
          {!myReserves?.length && <p>You have no reserves yet</p>}
        </div>
      </div>
      <button
        tw="border border-black bg-gray-300 p-5 text-xl"
        onClick={() => router.push('/reserve/create')}
      >
        Add new reserve
      </button>
    </>
  );
};

export default withPageAuthRequired(Page);
