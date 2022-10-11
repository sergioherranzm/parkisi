import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { StaticMap } from './maps/StaticMap';

export const ParkingList: React.FC<{ lat: string; lng: string }> = (props) => {
  const { lng, lat } = props;

  const limit = 2;
  const maxKm = 20;

  const router = useRouter();
  const { data: parkings } = useSWR(
    `/parking/address?lng=${lng}&lat=${lat}&limit=${limit}&maxKm=${maxKm}`
  );

  const [selectedParking, setSelectedParking] = useState(null);
  //console.log(' Current: lng=', lng, 'lat=', lat);

  const markers = parkings?.map((p, i) => {
    return {
      coordinates: p.location.coordinates,
      color: 'red',
      label: (i + 1).toString(),
    };
  });
  //Add the selected address to the map
  markers?.push({
    coordinates: [lng, lat],
    color: 'purple',
    label: '',
  });

  return (
    <div tw="flex-col gap-5">
      {parkings?.length > 0 && (
        <>
          <div tw="my-2 flex gap-3">
            <div tw="">
              {parkings.map((parking, index) => (
                <div
                  key={index + 1}
                  tw="border border-black shadow-lg p-3 rounded-lg bg-white cursor-pointer"
                  onClick={() => setSelectedParking(parking)}
                >
                  <p tw="bg-red-600 text-white font-semibold rounded-full p-1 text-center">
                    {index + 1}
                  </p>
                  <h4 tw="text-2xl">Address: {parking.address}</h4>
                  <p>Number of parking slots: {parking.slots.length}</p>
                  <button
                    tw="border border-black bg-gray-300"
                    onClick={() => router.push(`/parking/${parking._id}`)}
                  >
                    See slots
                  </button>
                </div>
              ))}
            </div>

            <div>
              <StaticMap size="600x400" markers={markers} />
            </div>
          </div>
          {selectedParking && (
            <>
              <div tw="text-lg">SLOTS</div>

              {selectedParking.slots?.length > 0 && (
                <div tw="my-2 flex gap-3">
                  {selectedParking.slots.map((slot) => (
                    <div key={slot._id} tw="border p-1">
                      <h3>{slot.identification}</h3>
                      <p>Size: {slot.size}</p>
                      <p>Parking difficulty: {slot.difficulty}</p>
                      <p>Price: {slot.price}€/day</p>
                      <button
                        tw="border border-black bg-gray-300 p-1"
                        onClick={() => router.push(`/slot/${slot._id}`)}
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {selectedParking.slots?.length === 0 && (
                <div tw="text-lg mt-5">
                  This parking has no parking slots yet
                </div>
              )}
            </>
          )}
        </>
      )}

      {!parkings?.length && <p>No parking found</p>}
    </div>
  );
};
