import { ParkingForm } from '../../components/forms/ParkingForm';

const Page = () => {
  return (
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">CREATE PARKING</h1>
        <ParkingForm />
      </div>
    </>
  );
};

export default Page;
