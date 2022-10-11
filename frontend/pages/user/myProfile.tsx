import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">MY PROFILE</h1>
        <div tw="my-2">
          {userProfile && (
            <>
              <div tw=" p-3 rounded-lg bg-white">
                <h4 tw="text-4xl">Profile of {userProfile.nickname}</h4>
                <p tw="text-gray-500">Firstname: {userProfile.name}</p>
                <p tw="text-gray-500">Surname: {userProfile.surname}</p>
                <p tw="text-gray-500">Email: {userProfile.email}</p>
                <p tw="text-gray-500">Phone number: {userProfile.phone}</p>
                <p tw="text-gray-500">Description: {userProfile.description}</p>
                <p>
                  WIP: Put in form mode to allow modification of certain fields
                </p>
              </div>
              <h4 tw="text-2xl">My vehicles:</h4>
              {userProfile.vehicles?.length > 0 && (
                <>
                  <div tw="flex">
                    {userProfile.vehicles.map((vehicle) => (
                      <div key={vehicle._id} tw="border p-1">
                        <h3>{vehicle.plate}</h3>
                        <p>{vehicle.model}</p>
                        <p>Type: {vehicle.type}</p>
                        <p>Size: {vehicle.size}</p>
                        <button
                          tw="border border-black bg-gray-300 p-1"
                          onClick={() => router.push(`/vehicle/${vehicle._id}`)}
                        >
                          Edit
                        </button>
                        <button
                          tw="border border-black bg-gray-300 p-1"
                          onClick={() => router.push(`#`)}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {!userProfile.vehicles?.length && (
                <div>You have no vehicles yet</div>
              )}
              <button
                tw="border border-black bg-gray-300 p-3 text-xl"
                onClick={() => router.push(`/vehicle/create`)}
              >
                Add new vehicle
              </button>
            </>
          )}
          {!userProfile && <p>User profile not found</p>}
        </div>
      </div>
    </>
  );
};

export default Page;
