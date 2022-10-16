import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoChevronBack } from 'react-icons/io5';
import useSWR from 'swr';
import { SlotForm } from '../../components/forms/SlotForm';
import { Button } from '../../components/shared/Button';

const Page = () => {
  const router = useRouter();
  const {
    query: { parkingId },
  } = router;

  const { data: parking } = useSWR(
    parkingId ? `/parking/detail/${parkingId}` : null
  );

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const isOwner = parking?.owner === userProfile?._id;

  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <Link href={`/parking/${parkingId}`}>
          <Button variant="neutral" icon={<IoChevronBack size={18} />}>
            Back
          </Button>
        </Link>

        <div tw="">
          <h1 tw="text-5xl font-extrabold">
            <p tw="text-primary-400 inline">Create new </p>
            <p tw="text-secondary-300 inline">slot</p>
          </h1>
          {isOwner && <SlotForm parkingId={parking?._id} />}
          {!isOwner && (
            <div tw="text-secondary-400 font-medium my-3">
              Only the parking owner can create new parking slots
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
