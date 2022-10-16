import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Carousel from 'react-material-ui-carousel';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Alert } from '@mui/material';
import { UserProfileForm } from '../../components/forms/UserProfileForm';
import { GridLoader } from 'react-spinners';
import { AnimatePresence } from 'framer-motion';
import { Button } from '../../components/shared/Button';
import { CarSmall } from '../../components/shared/CarSmall';
import { motion } from 'framer-motion';
import { CarMedium } from '../../components/shared/CarMedium';
import { CarLarge } from '../../components/shared/CarLarge';
import { MotorbikeSmall } from '../../components/shared/MotorbikeSmall';
import { MotorbikeMedium } from '../../components/shared/MotorbikeMedium';
import { MotorbikeLarge } from '../../components/shared/MotorbikeLarge';
import { OtherVehicle } from '../../components/shared/OtherVehicle';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';

const Page = () => {
  const router = useRouter();
  const {
    query: { newVehicle, deleteVehicle },
  } = router;
  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        {userProfile && (
          <>
            <h1 tw="text-5xl font-extrabold mb-3">
              <p tw="text-primary-400 inline">Profile of </p>
              <p tw="text-secondary-300 inline">{userProfile?.nickname}</p>
            </h1>
            {newVehicle && (
              <Alert tw="my-2" severity="info">
                New vehicle created
              </Alert>
            )}
            {deleteVehicle && (
              <Alert tw="my-2" severity="error">
                Vehicle deleted
              </Alert>
            )}
            <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg">
              <UserProfileForm />
            </div>
            <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg flex flex-col items-center">
              <h4 tw="text-2xl text-center text-primary-400 font-bold">
                My vehicles
              </h4>
              {userProfile.vehicles?.length > 0 && (
                <div tw="w-1/3 my-2" style={{ minWidth: 'fit-content' }}>
                  <Carousel
                    autoPlay={true}
                    stopAutoPlayOnHover={true}
                    interval={3000}
                    animation="fade"
                    cycleNavigation={true}
                    navButtonsAlwaysVisible={false}
                    navButtonsWrapperProps={{ style: { margin: '0 0px' } }}
                    sx={{}}
                  >
                    {userProfile.vehicles.map((vehicle) => (
                      <div
                        key={vehicle._id}
                        tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col justify-between"
                      >
                        {newVehicle === vehicle._id && (
                          <div tw="bg-secondary-200 text-primary-500 px-1 rounded-md font-semibold max-w-max absolute">
                            NEW
                          </div>
                        )}
                        <div tw="rounded-lg flex flex-col justify-center items-center">
                          {vehicle.type === 'car' &&
                            vehicle.size.toString() === '1' && (
                              <motion.div
                                animate={{
                                  rotateY: [0, 180, 0],
                                  scale: [4, 1],
                                }}
                                transition={{ duration: 1 }}
                              >
                                <CarSmall
                                  fillColor="#A7383E"
                                  height="80"
                                  width="80"
                                />
                              </motion.div>
                            )}
                          {vehicle.type === 'car' &&
                            vehicle.size.toString() === '2' && (
                              <motion.div
                                animate={{
                                  rotateY: [0, 180, 0],
                                  scale: [4, 1],
                                }}
                                transition={{ duration: 1 }}
                              >
                                <CarMedium
                                  fillColor="#A7383E"
                                  height="80"
                                  width="80"
                                />
                              </motion.div>
                            )}
                          {vehicle.type === 'car' &&
                            vehicle.size.toString() === '3' && (
                              <motion.div
                                animate={{
                                  rotateY: [0, 180, 0],
                                  scale: [4, 1],
                                }}
                                transition={{ duration: 1 }}
                              >
                                <CarLarge
                                  fillColor="#A7383E"
                                  height="80"
                                  width="80"
                                />
                              </motion.div>
                            )}
                          {vehicle.type === 'motorbike' &&
                            vehicle.size.toString() === '1' && (
                              <motion.div
                                animate={{
                                  rotateY: [0, 180, 0],
                                  scale: [4, 1],
                                }}
                                transition={{ duration: 1 }}
                              >
                                <MotorbikeSmall
                                  fillColor="#A7383E"
                                  height="80"
                                  width="80"
                                />
                              </motion.div>
                            )}
                          {vehicle.type === 'motorbike' &&
                            vehicle.size.toString() === '2' && (
                              <motion.div
                                animate={{
                                  rotateY: [0, 180, 0],
                                  scale: [4, 1],
                                }}
                                transition={{ duration: 1 }}
                              >
                                <MotorbikeMedium
                                  fillColor="#A7383E"
                                  height="80"
                                  width="80"
                                />
                              </motion.div>
                            )}
                          {vehicle.type === 'motorbike' &&
                            vehicle.size.toString() === '3' && (
                              <motion.div
                                animate={{
                                  rotateY: [0, 180, 0],
                                  scale: [4, 1],
                                }}
                                transition={{ duration: 1 }}
                              >
                                <MotorbikeLarge
                                  fillColor="#A7383E"
                                  height="80"
                                  width="80"
                                />
                              </motion.div>
                            )}
                          {vehicle.type === 'other' && (
                            <motion.div
                              animate={{
                                rotateY: [0, 180, 0],
                                scale: [4, 1],
                              }}
                              transition={{ duration: 1 }}
                              tw="mb-3"
                            >
                              <OtherVehicle
                                fillColor="#A7383E"
                                height="60"
                                width="60"
                              />
                            </motion.div>
                          )}

                          <div tw="border bg-white border-gray-500 rounded flex max-w-min shadow-md h-6">
                            <div
                              tw="bg-blue-800 w-4 rounded-l"
                              style={{ margin: '-1px' }}
                            ></div>
                            <div tw="text-black text-center px-2 leading-5 uppercase font-bold">
                              {vehicle.plate}
                            </div>
                          </div>
                          <div tw="mt-3 text-primary-400 font-semibold text-center">
                            {vehicle.model}
                          </div>
                        </div>
                        <div tw="mt-3 flex justify-center">
                          <Link href={`/vehicle/${vehicle._id}`}>
                            <Button variant="neutral">View</Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
              {!userProfile.vehicles?.length && (
                <div tw="text-secondary-400 font-medium my-3">
                  You have no vehicles yet
                </div>
              )}
              <div tw="my-2">
                <Link href={`/vehicle/create`}>
                  <Button icon={<AiOutlinePlus />} variant="submit">
                    New vehicle
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
        {!userProfile && (
          <div tw="flex flex-col justify-center items-center gap-2">
            <div tw="text-primary-400 text-3xl font-bold">LOADING</div>
            <GridLoader color={'#14560D'} size={15} />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
