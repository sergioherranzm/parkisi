import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Alert } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';
import useSWR from 'swr';
import { Button } from '../../components/shared/Button';

const Page = () => {
  const router = useRouter();
  const {
    query: { newParking, deleteParking },
  } = router;
  const { user } = useUser();
  const { data: myParkings } = useSWR(
    user?.sub ? `/parking/list/${user?.sub}` : null
  );

  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <h1 tw="text-5xl font-extrabold mb-3">
          <p tw="text-primary-400 inline">My </p>
          <p tw="text-secondary-300 inline">parkings</p>
        </h1>
        {newParking && (
          <Alert tw="my-2" severity="info">
            New parking created
          </Alert>
        )}
        {deleteParking && (
          <Alert tw="my-2" severity="error">
            Parking deleted
          </Alert>
        )}

        {myParkings?.length > 0 && (
          <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg grid grid-cols-4 gap-x-4 gap-y-6">
            {myParkings.map((parking, i) => (
              <motion.div
                key={parking._id}
                tw="border bg-white border-primary-100 shadow-2xl p-3 rounded-lg flex flex-col justify-between w-full hover:ring-4 ring-secondary-300"
                style={{ zIndex: 0 }}
                whileHover={{
                  scaleX: 1.08,
                  scaleY: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                {newParking === parking._id && (
                  <div tw="bg-secondary-200 text-primary-500 px-1 text-xl rounded-md font-semibold max-w-max absolute">
                    NEW
                  </div>
                )}
                <div>
                  {/* eslint-disable */}
                  <img src={parking.image} alt="map" />
                  {/* eslint-enable */}
                  <h4 tw="text-2xl text-primary-400 font-semibold">
                    {parking.street}, {parking.streetNumber}
                  </h4>
                  <p tw="text-gray-500">{parking.city}</p>
                </div>
                <div>
                  <div tw="my-2">
                    <p tw="text-primary-500 inline">
                      Number of parking slots:{' '}
                    </p>
                    <p tw="text-secondary-400 text-lg font-medium inline">
                      {parking.slots.length}
                    </p>
                  </div>
                  <Link href={`/parking/${parking._id}`}>
                    <Button variant="neutral">View</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!myParkings?.length && (
          <div tw="text-secondary-400 font-medium my-3">
            You have no parking published yet
          </div>
        )}
        <div tw="my-2">
          <Link href={`/parking/create`}>
            <Button icon={<AiOutlinePlus />} variant="submit">
              New parking
            </Button>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
