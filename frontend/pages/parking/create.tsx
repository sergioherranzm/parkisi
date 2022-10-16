import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import { ParkingForm } from '../../components/forms/ParkingForm';
import { Button } from '../../components/shared/Button';

const Page = () => {
  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <Link href={`/parking/list`}>
          <Button variant="neutral" icon={<IoChevronBack size={18} />}>
            Back
          </Button>
        </Link>

        <div tw="">
          <h1 tw="text-5xl font-extrabold">
            <p tw="text-primary-400 inline">Create new </p>
            <p tw="text-secondary-300 inline">parking</p>
          </h1>
          <ParkingForm />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
