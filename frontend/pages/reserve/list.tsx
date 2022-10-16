import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Button } from '../../components/shared/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { Alert } from '@mui/material';

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
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <h1 tw="text-5xl font-extrabold mb-3">
          <p tw="text-primary-400 inline">My </p>
          <p tw="text-secondary-300 inline">reserves</p>
        </h1>
        {newReserve && (
          <Alert tw="my-2" severity="info">
            New reserve added
          </Alert>
        )}
        {deleteReserve && (
          <Alert tw="my-2" severity="error">
            Reserve deleted
          </Alert>
        )}

        {myReserves?.length > 0 && (
          <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg grid grid-cols-1 gap-x-4 gap-y-6">
            {myReserves.map((reserve) => (
              <motion.div
                key={reserve._id}
                tw="border bg-white border-primary-100 shadow-2xl p-3 rounded-lg flex flex-col justify-between w-full hover:ring-4 ring-secondary-300"
                style={{ zIndex: 0 }}
                whileHover={{
                  scaleX: 1.02,
                  scaleY: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div>
                  <div tw="flex gap-3">
                    <h4 tw="text-2xl text-primary-400 font-semibold">
                      {reserve.slot?.parking?.street},{' '}
                      {reserve.slot?.parking?.streetNumber}
                    </h4>
                    {newReserve === reserve._id && (
                      <div tw="bg-secondary-200 text-primary-500 px-1 pt-1 text-xl rounded-md font-semibold max-w-max">
                        NEW
                      </div>
                    )}
                  </div>

                  <p tw="text-gray-500">{reserve.slot?.parking?.city}</p>
                </div>
                <div>
                  <div tw="my-2">
                    <p tw="text-primary-500 inline">From </p>
                    <p tw="text-secondary-400 text-lg font-medium inline">
                      {reserve.period[0]}
                    </p>
                    <p tw="text-primary-500 inline"> to </p>
                    <p tw="text-secondary-400 text-lg font-medium inline">
                      {reserve.period[reserve.period.length - 1]}
                    </p>
                  </div>
                  <Link href={`/reserve/${reserve._id}`}>
                    <Button variant="neutral">View</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!myReserves?.length && (
          <div tw="text-secondary-400 font-medium my-3">
            You have no reserves yet
          </div>
        )}
        <div tw="my-2">
          <Link href={`/reserve/create`}>
            <Button icon={<AiOutlinePlus />} variant="submit">
              New reserve
            </Button>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
