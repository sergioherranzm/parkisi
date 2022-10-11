import { ReserveForm } from '../../components/forms/ReserveForm';

const Page = () => {
  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">CREATE RESERVE</h1>

        <>
          <ReserveForm />
        </>
      </div>
    </>
  );
};

export default Page;
