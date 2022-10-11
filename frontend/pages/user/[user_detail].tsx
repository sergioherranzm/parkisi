import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const {
    query: { user_auth0_id },
  } = router;

  const { data: parking } = useSWR(
    parking_id ? `/parking/detail/${parking_id}` : null
  );

  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">PARKING DETAIL</h1>
        <div tw="my-2">
          {parking && (
            <div tw=" p-3 rounded-lg bg-white">
              <h4 tw="text-4xl">Parking on {parking.address}</h4>
              <p tw="text-gray-500">{parking.description}</p>
              {parking.slots?.length > 0 && (
                <>
                  <div tw="text-lg mt-5">SLOTS</div>
                  <div tw="flex">
                    {parking.slots.map((slot) => (
                      <div key={slot._id} tw="border p-1">
                        <h3>{slot.identification}</h3>
                        <p>Size: {slot.size}</p>
                        <p>Price: {slot.price}€/day</p>
                        <button
                          tw="border border-black bg-gray-300 p-1"
                          onClick={() => router.push(`/slot/${slot._id}`)}
                        >
                          Open
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
          {!parking && <p>Parking not found</p>}
        </div>
      </div>
    </>
  );
};

export default Page;
