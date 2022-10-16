import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { VehicleForm } from '../../components/forms/VehicleForm';
import { Button } from '../../components/shared/Button';
import { IoChevronBack } from 'react-icons/io5';
import Link from 'next/link';

const Page = () => {
  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <Link href={`/user/myProfile`}>
          <Button variant="neutral" icon={<IoChevronBack size={18} />}>
            Back
          </Button>
        </Link>

        <div tw="">
          <h1 tw="text-5xl font-extrabold">
            <p tw="text-primary-400 inline">Create new </p>
            <p tw="text-secondary-300 inline">vehicle</p>
          </h1>
          <VehicleForm />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
