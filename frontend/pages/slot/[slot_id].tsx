import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { DateRangePickerWidget } from '../../components/forms/form_widgets/DateRangePickerWidget';
import { StaticDatePickerWidget } from '../../components/StaticDatePickerWidget';

const Page = () => {
  const router = useRouter();
  const {
    query: { slot_id },
  } = router;

  const { data: slot } = useSWR(slot_id ? `/slot/detail/${slot_id}` : null);

  const reservesPeriods = slot?.reserves.map((reserve) => reserve.period);

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const isOwner = slot?.parking?.owner === userProfile?._id;

  return (
    <>
      <div tw=" mx-auto ">
        <button
          tw="border border-black bg-gray-300 p-1"
          onClick={() => router.push(`/parking/${slot.parking._id}`)}
        >
          Back
        </button>
        <h1 tw="text-4xl font-extrabold">SLOT DETAIL</h1>
        <div tw="my-2">
          {slot && (
            <div tw=" p-3 rounded-lg bg-white">
              <h4 tw="text-4xl inline">Slot {slot.identification}</h4>
              {isOwner && (
                <button
                  tw="border border-black bg-gray-300 p-1 m-2"
                  onClick={() => router.push(`#`)}
                >
                  Remove slot
                </button>
              )}
              <p tw="text-gray-500">Situated on {slot.parking.address}</p>
              <p>Size: {slot.size}</p>
              <p>Parking difficulty: {slot.difficulty}</p>
              <p>Price: {slot.price}€/day</p>
              <div tw="text-lg my-5">AVAILABILITY</div>
              {isOwner && (
                <>
                  <div tw="border">
                    <StaticDatePickerWidget reserves={reservesPeriods} />
                  </div>
                  <button
                    tw="border border-black bg-gray-300 p-1"
                    onClick={() => router.push(`#`)}
                  >
                    Remove slot
                  </button>
                </>
              )}
              {!isOwner && (
                <>
                  <div tw="border">
                    <p>DateRangePickerWidget</p>
                  </div>
                  <button
                    tw="border border-black bg-gray-300 p-1"
                    onClick={() => router.push(`#`)}
                  >
                    Reserve slot
                  </button>
                </>
              )}
            </div>
          )}
          {!slot && <p>Parking slot not found</p>}
        </div>
      </div>
    </>
  );
};

export default Page;
