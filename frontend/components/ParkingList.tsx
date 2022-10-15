import { useRouter } from 'next/router';
import Carousel from 'react-material-ui-carousel';
import { useState } from 'react';
import useSWR from 'swr';
import { sizesMap } from '../types/sizesMap';
import { StaticMap } from './maps/StaticMap';
import { StaticDatePickerWidget } from './StaticDatePickerWidget';
import LatLon from 'geodesy/latlon-spherical.js';
import Map from './maps/Map';

export const ParkingList: React.FC<{
  lat: string;
  lng: string;
  vehiclePlate: string;
}> = (props) => {
  const { lng, lat, vehiclePlate } = props;

  const currentPos = new LatLon(lat, lng);

  const limit = 3;
  const maxKm = 20;

  const router = useRouter();
  const { data: parkings } = useSWR(
    `/parking/address?lng=${lng}&lat=${lat}&limit=${limit}&maxKm=${maxKm}`
  );
  const { data: vehicle } = useSWR(`/vehicle/plate/${vehiclePlate}`);

  const [selectedParking, setSelectedParking] = useState(null);
  const [centerMap, setCenterMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState('');

  let markers = parkings?.map((p, i) => {
    return {
      coordinates: p.location.coordinates,
      color: '#671014',
      label: (i + 1).toString(),
      size: 30,
    };
  });
  //Add the selected address to the map
  if (!markers) {
    markers = [];
  }
  markers?.push({
    coordinates: [lng, lat],
    color: '#14560D',
    label: '',
    size: 45,
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
                  onMouseOver={() => {
                    setSelectedMarker((index + 1).toString());
                    //console.log(index + 1);
                  }}
                  onClick={() => {
                    setSelectedParking(parking);
                    setCenterMap({
                      lng: parseFloat(parking.location.coordinates[0]),
                      lat: parseFloat(parking.location.coordinates[1]),
                    });
                  }}
                >
                  <p tw="bg-red-600 text-white font-semibold rounded-full p-1 text-center">
                    {index + 1}
                  </p>
                  <h4 tw="text-2xl">Address: {parking.address}</h4>
                  <p>Number of parking slots: {parking.slots.length}</p>
                  <p>
                    Distance:{' '}
                    {Math.round(
                      new LatLon(
                        parking.location.coordinates[1],
                        parking.location.coordinates[0]
                      ).distanceTo(currentPos) / 10
                    ) / 100}
                    km
                  </p>
                </div>
              ))}
            </div>

            <div>
              <Map
                initialCoords={{ lng: parseFloat(lng), lat: parseFloat(lat) }}
                markers={markers}
                center={centerMap}
                markerSel={selectedMarker}
              />
            </div>
          </div>
          {selectedParking && (
            <>
              <div tw="text-lg">SLOTS</div>

              {selectedParking.slots?.length > 0 && (
                <div tw="mx-10">
                  <Carousel
                    autoPlay={false}
                    animation="slide"
                    navButtonsAlwaysVisible={true}
                    navButtonsWrapperProps={{ style: { margin: '0 0px' } }}
                    sx={{}}
                  >
                    {selectedParking.slots.map((slot) => (
                      <div key={slot._id} tw="border p-1 mx-16">
                        <h3 tw="text-2xl">Slot {slot.identification}</h3>
                        <p>Size: {sizesMap[slot?.size]}</p>
                        <p>Parking difficulty: {slot.difficulty}</p>
                        <p>Price: {slot.price}€/day</p>
                        {slot.size < vehicle.size && (
                          <p tw="text-red-600 font-bold">
                            This slot may be too small for your {vehicle.model}
                          </p>
                        )}

                        <button
                          tw="border border-black bg-gray-300 p-1"
                          onClick={() =>
                            router.push(
                              `/slot/${slot._id}?vehicleId=${vehicle._id}`
                            )
                          }
                        >
                          Select this slot
                        </button>
                        <p>Slot availability:</p>
                        <StaticDatePickerWidget slotId={slot._id} />
                      </div>
                    ))}
                  </Carousel>
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

      {!parkings?.length && (
        <>
          <p>No parking found</p>{' '}
          <div>
            <StaticMap size="700x300" zoom={15} markers={markers} />
          </div>
        </>
      )}
    </div>
  );
};
