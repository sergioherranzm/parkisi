import Carousel from 'react-material-ui-carousel';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import useSWR from 'swr';
import { StaticMap } from './maps/StaticMap';
import { StaticDatePickerWidget } from './StaticDatePickerWidget';
import LatLon from 'geodesy/latlon-spherical.js';
import Map from './maps/Map';
import { Button } from './shared/Button';
import { BiCurrentLocation } from 'react-icons/bi';
import Link from 'next/link';
import { difficultyMap } from '../types/difficultyMap';
import tw from 'twin.macro';
import { valueToPercent } from '@mui/base';

export const ParkingList: React.FC<{
  lat: string;
  lng: string;
  vehiclePlate: string;
  limitShow: number;
}> = (props) => {
  const { lng, lat, vehiclePlate, limitShow } = props;

  const currentPos = new LatLon(lat, lng);

  const limit = 10;
  const maxKm = 20;

  const { data: parkings } = useSWR(
    `/parking/address?lng=${lng}&lat=${lat}&limit=${limit}&maxKm=${maxKm}`
  );
  const { data: vehicle } = useSWR(`/vehicle/plate/${vehiclePlate}`);

  const [selectedParking, setSelectedParking] = useState(null);
  const [centerMap, setCenterMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  let markers = parkings
    ?.map((p, i) => {
      if (i + 1 > limitShow) {
        return false;
      }
      return {
        coordinates: p.location.coordinates,
        color: '#671014',
        label: (i + 1).toString(),
        size: 30,
      };
    })
    .filter((v) => v);

  //Add the selected address to the map
  if (!markers) {
    markers = [];
  }
  markers?.push({
    coordinates: [lng, lat],
    color: '0x14560D',
    label: '',
    size: 45,
  });

  return (
    <AnimatePresence>
      {parkings?.length > 0 && (
        <>
          <div
            tw="flex gap-3 h-full justify-between"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div tw="flex flex-col flex-nowrap gap-2 h-full z-10 w-1/3">
              {parkings.map((parking, index) => (
                <motion.div
                  key={index + 1}
                  tw=""
                  css={[
                    tw`border-2 border-primary-300 shadow-lg p-3 rounded-lg bg-primary-000 hover:border-secondary-300 hover:border-2 hover:bg-primary-200 transition-colors`,
                    index + 1 > limitShow && tw`hidden`,
                    `${index + 1}` === selectedMarker &&
                      tw`bg-primary-200 border-secondary-300 border-2`,
                  ]}
                  style={{ zIndex: 0 }}
                  whileHover={{
                    scaleX: 1.08,
                    scaleY: 1.08,
                    transition: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setSelectedCard(`${index + 1}`)}
                  onMouseLeave={() => setSelectedCard(``)}
                >
                  <div tw="flex flex-col gap-3 justify-between">
                    <div tw="flex justify-between">
                      <div>
                        <h4 tw="text-xl text-primary-500 font-bold">
                          {parking.street}, {parking.streetNumber}
                        </h4>
                        <div tw="text-primary-500 flex gap-1">
                          <p tw="text-primary-500 ">
                            Number of parking slots:{' '}
                          </p>
                          <p tw="font-semibold">{parking.slots.length}</p>
                        </div>
                        <div tw="text-primary-500 flex gap-1">
                          <p tw="text-primary-500 ">Distance: </p>
                          <p tw="font-semibold">
                            {Math.round(
                              new LatLon(
                                parking.location.coordinates[1],
                                parking.location.coordinates[0]
                              ).distanceTo(currentPos) / 10
                            ) / 100}{' '}
                            km
                          </p>
                        </div>
                      </div>
                      <div>
                        <div tw="bg-secondary-400 text-white font-bold rounded-full py-1 text-center min-w-max text-lg h-9 w-9">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div tw="flex justify-end gap-2">
                      <Link href={'#slots_container'}>
                        <Button
                          variant="submit"
                          onClick={() => setSelectedParking(parking)}
                        >
                          See slots
                        </Button>
                      </Link>

                      <Button
                        onClick={() => {
                          setCenterMap({
                            lng: parseFloat(parking.location.coordinates[0]),
                            lat: parseFloat(parking.location.coordinates[1]),
                          });
                        }}
                        icon={<BiCurrentLocation size={20} />}
                      >
                        {' '}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              tw="border border-primary-300 w-2/3"
              style={{ height: '600px' }}
            >
              <Map
                initialCoords={{ lng: parseFloat(lng), lat: parseFloat(lat) }}
                markers={markers}
                center={centerMap}
                cardSel={selectedCard}
                changeCardSelection={setSelectedMarker}
              />
            </div>
          </div>
          {selectedParking && (
            <div
              id="slots_container"
              tw="mt-3 p-3 border border-primary-100 shadow-sm rounded-lg flex flex-col items-center"
            >
              <h4 tw="text-2xl text-center text-primary-400 font-bold">
                <p tw="inline">Parking slots in </p>
                <p tw="inline text-secondary-400">
                  {selectedParking.street}, {selectedParking.streetNumber}
                </p>
              </h4>
              {selectedParking?.slots?.length > 0 && (
                <div tw="w-1/2 my-2" style={{ minWidth: 'fit-content' }}>
                  <Carousel
                    autoPlay={false}
                    stopAutoPlayOnHover={true}
                    interval={3000}
                    animation="fade"
                    cycleNavigation={true}
                    navButtonsAlwaysVisible={true}
                    navButtonsWrapperProps={{ style: { margin: '0 0px' } }}
                    sx={{ height: '100%' }}
                  >
                    {selectedParking.slots.map((slot) => (
                      <div
                        key={slot._id}
                        tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col gap-3 min-w-max"
                      >
                        {slot.size < vehicle.size && (
                          <div tw="bg-red-600 px-1 rounded-md font-medium text-white absolute">
                            Maybe too small for your {vehicle.model}
                          </div>
                        )}
                        <div tw="mt-4 rounded-lg flex flex-col justify-center items-center gap-3">
                          <div tw="text-secondary-400 font-bold text-center text-6xl">
                            Slot {slot.identification}
                          </div>
                          <div tw="text-primary-400 text-center font-medium text-3xl flex">
                            <div
                              css={[
                                tw`max-w-min p-1 border-4 border-transparent`,
                                slot.size.toString() === '1' &&
                                  tw`border-secondary-300 text-secondary-300 font-extrabold`,
                              ]}
                            >
                              S
                            </div>
                            <div
                              css={[
                                tw`max-w-min p-1 border-4 border-transparent`,
                                slot.size.toString() === '2' &&
                                  tw`border-secondary-300 text-secondary-300 font-extrabold`,
                              ]}
                            >
                              M
                            </div>
                            <div
                              css={[
                                tw`max-w-min p-1 border-4 border-transparent`,
                                slot.size.toString() === '3' &&
                                  tw`border-secondary-300 text-secondary-300 font-extrabold`,
                              ]}
                            >
                              L
                            </div>
                          </div>
                          <div tw=" text-center text-2xl">
                            <p tw="text-secondary-300 inline font-bold">
                              {difficultyMap[slot.difficulty]}
                            </p>
                            <p tw="text-primary-300 inline font-normal">
                              {' '}
                              to park
                            </p>
                          </div>
                          <div tw="text-center text-2xl">
                            <p tw="text-secondary-300 inline font-bold">
                              {slot.price?.toString().replace('.', ',')}
                            </p>
                            <p tw="text-primary-300 inline font-normal">
                              {' '}
                              €/day
                            </p>
                          </div>
                        </div>
                        <div tw="flex justify-center">
                          <Link
                            href={`/slot/${slot._id}?vehicleId=${vehicle._id}`}
                          >
                            <Button variant="neutral">View</Button>
                          </Link>
                        </div>
                        <div tw="my-2 w-full flex justify-center items-center">
                          <div tw="border-4 border-primary-200 rounded-md max-w-max">
                            <StaticDatePickerWidget slotId={slot._id} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
              {selectedParking?.slots?.length === 0 && (
                <div tw="text-secondary-400 font-bold my-3 text-xl">
                  This parking has no parking slots yet
                </div>
              )}
            </div>
          )}
        </>
      )}

      {!parkings?.length && (
        <>
          <div
            tw="flex gap-3 h-full justify-between"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div tw="p-5 h-full flex justify-center items-center">
              <h4 tw="text-2xl text-center text-primary-400 font-bold">
                No parking found near the selected address
              </h4>
            </div>

            <div tw="">
              <StaticMap size="800x600" zoom={15} markers={markers} />
            </div>
          </div>{' '}
        </>
      )}
    </AnimatePresence>
  );
};
