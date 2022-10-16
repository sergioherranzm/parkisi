import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AnimatePresence } from 'framer-motion';
import { ReserveForm } from '../../components/forms/ReserveForm';

const Page = () => {
  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <h1 tw="text-5xl font-extrabold">
          <p tw="text-primary-400 inline">Search </p>
          <p tw="text-secondary-300 inline">parkings</p>
        </h1>

        <ReserveForm />
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
