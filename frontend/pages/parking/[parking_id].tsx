import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { StaticMap } from '../../components/maps/StaticMap';

const Page = () => {
  const router = useRouter();
  const {
    query: { parking_id },
  } = router;

  const { data: parking } = useSWR(
    parking_id ? `/parking/detail/${parking_id}` : null
  );

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const isOwner = parking?.owner === userProfile?._id;

  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">PARKING DETAIL</h1>
        <div tw="my-2">
          {parking && (
            <div tw=" p-3 rounded-lg bg-white">
              <h4 tw="text-4xl">Parking on {parking.address} street</h4>
              <p tw="text-gray-500">{parking.description}</p>
              <div>
                <StaticMap
                  size="400x300"
                  zoom={17}
                  markers={[
                    {
                      coordinates: parking.location.coordinates,
                      color: 'purple',
                      label: 'P',
                    },
                  ]}
                />
              </div>
              {parking.slots?.length > 0 && (
                <>
                  <div tw="text-lg mt-5">SLOTS</div>
                  <div tw="flex">
                    {parking.slots.map((slot) => (
                      <div key={slot._id} tw="border p-1">
                        <h3>{slot.identification}</h3>
                        <p>Size: {slot.size}</p>
                        <p>Parking difficulty: {slot.difficulty}</p>
                        <p>Price: {slot.price}€/day</p>
                        <button
                          tw="border border-black bg-gray-300 p-1"
                          onClick={() => router.push(`/slot/${slot._id}`)}
                        >
                          Select
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {parking.slots?.length === 0 && (
                <div tw="text-lg mt-5">
                  This parking has no parking slots yet
                </div>
              )}
              {isOwner && (
                <button
                  tw="border border-black bg-gray-300 p-3 text-xl"
                  onClick={() =>
                    router.push(`/slot/create?parkingId=${parking_id}`)
                  }
                >
                  Add new parking slot
                </button>
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
