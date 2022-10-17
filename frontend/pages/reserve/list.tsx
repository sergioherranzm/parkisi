import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Button as MyButton } from '../../components/shared/Button';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { Alert, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import axios, { AxiosResponse } from 'axios';
import { GridLoader } from 'react-spinners';
import tw from 'twin.macro';
import { difficultyMap } from '../../types/difficultyMap';
import { OtherVehicle } from '../../components/shared/OtherVehicle';
import { MotorbikeLarge } from '../../components/shared/MotorbikeLarge';
import { MotorbikeMedium } from '../../components/shared/MotorbikeMedium';
import { MotorbikeSmall } from '../../components/shared/MotorbikeSmall';
import { CarSmall } from '../../components/shared/CarSmall';
import { CarMedium } from '../../components/shared/CarMedium';
import { CarLarge } from '../../components/shared/CarLarge';

const Page = () => {
  const router = useRouter();

  const {
    query: { newReserve },
  } = router;

  const { user } = useUser();
  const { data: myReserves } = useSWR(
    user?.sub ? `/reserve/list/user/${user?.sub}` : null
  );
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const [openDialog, setOpenDialog] = useState(false);
  const [reserve_id, setReserve_id] = useState(undefined);
  const [deleteReserve, setDeleteReserve] = useState(false);

  const { data } = useSWR(reserve_id ? `/reserve/detail/${reserve_id}` : null);
  const reserveWithParking = data?.reserveWithParking;
  const reserveWithVehicle = data?.reserveWithVehicle;

  const { data: userProfileOwner } = useSWR(
    reserveWithParking?.slot?.parking?.owner
      ? `/userProfile/detail/${reserveWithParking?.slot?.parking?.owner}`
      : null
  );

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const delete_reserve = async () => {
    const url = `${PROXY_URL}/reserve/detail/${reserve_id}`;
    const deleteResponse: AxiosResponse = await axios.delete(url);
    if (deleteResponse.status === 200) {
      //send mail to user
      let mailType = 'reserveDeletion';
      let mailTo = userProfile.email;
      const address = reserveWithParking?.slot?.parking?.address;
      const period = `from ${reserveWithParking?.period[0]} to ${
        reserveWithParking?.period[reserveWithParking?.period.length - 1]
      } (${reserveWithParking?.period.length} days)`;
      let hyperlink = `${FRONT_URL}reserve/list`;
      let url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&period=${period}&hyperlink=${hyperlink}`;
      let sendMailResponse: AxiosResponse = await axios.get(url_mail);
      //send mail to owner
      mailType = 'reserveDeletionOwner';
      mailTo = userProfileOwner?.email;
      const identification = reserveWithParking?.slot?.identification;
      hyperlink = `${FRONT_URL}slot/${reserveWithParking?.slot?._id}`;
      url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&period=${period}&identification=${identification}&hyperlink=${hyperlink}`;
      sendMailResponse = await axios.get(url_mail);
      //redirection
      setReserve_id(undefined);
      router.reload();
      //router.push(`/reserve/list`);
      //setDeleteReserve(true);
    } else {
      throw new Error('Reserve deletion failed');
    }
  };

  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <h1 tw="text-5xl font-extrabold mb-3">
          <p tw="text-primary-400 inline">My </p>
          <p tw="text-secondary-300 inline">reserves</p>
        </h1>
        {newReserve && (
          <Alert tw="my-2" severity="info">
            New reserve added
          </Alert>
        )}
        {deleteReserve && (
          <Alert tw="my-2" severity="error">
            Reserve deleted
          </Alert>
        )}

        {myReserves?.length > 0 && (
          <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg flex gap-3">
            <div tw="w-1/2 flex flex-col gap-2">
              {myReserves.map((reserve) => (
                <motion.div
                  key={reserve._id}
                  tw="border bg-white border-primary-100 shadow-2xl p-3 rounded-lg flex flex-col justify-between w-full hover:ring-4 ring-secondary-300"
                  style={{ zIndex: 0 }}
                  whileHover={{
                    scaleX: 1.03,
                    scaleY: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div>
                    <div tw="flex gap-3">
                      <h4 tw="text-2xl text-primary-400 font-semibold">
                        {reserve.slot?.parking?.street},{' '}
                        {reserve.slot?.parking?.streetNumber}
                      </h4>
                      {newReserve === reserve._id && (
                        <div tw="bg-secondary-200 text-primary-500 px-1 pt-1 text-xl rounded-md font-semibold max-w-max">
                          NEW
                        </div>
                      )}
                    </div>

                    <p tw="text-gray-500">{reserve.slot?.parking?.city}</p>
                  </div>
                  <div>
                    <div tw="my-2">
                      <p tw="text-primary-500 inline">From </p>
                      <p tw="text-secondary-400 text-lg font-medium inline">
                        {reserve.period[0]}
                      </p>
                      <p tw="text-primary-500 inline"> to </p>
                      <p tw="text-secondary-400 text-lg font-medium inline">
                        {reserve.period[reserve.period.length - 1]}
                      </p>
                    </div>

                    <MyButton
                      variant="neutral"
                      onClick={() => {
                        setReserve_id(reserve._id);
                        setDeleteReserve(false);
                      }}
                    >
                      View
                    </MyButton>
                  </div>
                </motion.div>
              ))}
            </div>
            <div tw="border bg-white border-primary-100 shadow-2xl p-3 rounded-lg flex flex-col justify-between w-1/2">
              {reserveWithParking && reserveWithVehicle && (
                <div tw="flex flex-col items-center justify-center h-full text-center gap-3">
                  <h4 tw="text-3xl text-secondary-300 font-bold">
                    Reserve on {reserveWithParking.slot?.parking.street},{' '}
                    {reserveWithParking.slot?.parking.streetNumber}
                  </h4>

                  <h4 tw="text-2xl flex justify-center items-center gap-5 text-primary-400 font-bold">
                    {reserveWithParking.period[0]} <FaArrowRight />
                    {
                      reserveWithParking.period[
                        reserveWithParking.period.length - 1
                      ]
                    }
                  </h4>
                  <div tw="grid grid-cols-2 gap-10 px-9">
                    <div tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col gap-3 max-w-max">
                      <div tw="rounded-lg flex flex-col justify-center items-center gap-3">
                        <div tw="text-secondary-400 font-bold text-center text-2xl">
                          Slot {reserveWithParking.slot?.identification}
                        </div>
                        <div tw="text-primary-400 text-center font-medium text-xl flex">
                          <div
                            css={[
                              tw`max-w-min p-1 border-4 border-transparent`,
                              reserveWithParking.slot?.size.toString() ===
                                '1' &&
                                tw`border-secondary-300 text-secondary-300 font-extrabold`,
                            ]}
                          >
                            S
                          </div>
                          <div
                            css={[
                              tw`max-w-min p-1 border-4 border-transparent`,
                              reserveWithParking.slot?.size.toString() ===
                                '2' &&
                                tw`border-secondary-300 text-secondary-300 font-extrabold`,
                            ]}
                          >
                            M
                          </div>
                          <div
                            css={[
                              tw`max-w-min p-1 border-4 border-transparent`,
                              reserveWithParking.slot?.size.toString() ===
                                '3' &&
                                tw`border-secondary-300 text-secondary-300 font-extrabold`,
                            ]}
                          >
                            L
                          </div>
                        </div>
                        <div tw=" text-center text-lg">
                          <p tw="text-secondary-300 inline font-bold">
                            {difficultyMap[reserveWithParking.slot?.difficulty]}
                          </p>
                          <p tw="text-primary-300 inline font-normal">
                            {' '}
                            to park
                          </p>
                        </div>
                      </div>
                    </div>
                    <div tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col justify-between">
                      <div tw="rounded-lg flex flex-col justify-center items-center">
                        {reserveWithVehicle.vehicle?.type === 'car' &&
                          reserveWithVehicle.vehicle?.size === 1 && (
                            <motion.div
                              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
                              transition={{ duration: 1 }}
                            >
                              <CarSmall
                                fillColor="#A7383E"
                                height="80"
                                width="80"
                              />
                            </motion.div>
                          )}
                        {reserveWithVehicle.vehicle?.type === 'car' &&
                          reserveWithVehicle.vehicle?.size === 2 && (
                            <motion.div
                              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
                              transition={{ duration: 1 }}
                            >
                              <CarMedium
                                fillColor="#A7383E"
                                height="80"
                                width="80"
                              />
                            </motion.div>
                          )}
                        {reserveWithVehicle.vehicle?.type === 'car' &&
                          reserveWithVehicle.vehicle?.size === 3 && (
                            <motion.div
                              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
                              transition={{ duration: 1 }}
                            >
                              <CarLarge
                                fillColor="#A7383E"
                                height="80"
                                width="80"
                              />
                            </motion.div>
                          )}
                        {reserveWithVehicle.vehicle?.type === 'motorbike' &&
                          reserveWithVehicle.vehicle?.size === 1 && (
                            <motion.div
                              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
                              transition={{ duration: 1 }}
                            >
                              <MotorbikeSmall
                                fillColor="#A7383E"
                                height="80"
                                width="80"
                              />
                            </motion.div>
                          )}
                        {reserveWithVehicle.vehicle?.type === 'motorbike' &&
                          reserveWithVehicle.vehicle?.size === 2 && (
                            <motion.div
                              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
                              transition={{ duration: 1 }}
                            >
                              <MotorbikeMedium
                                fillColor="#A7383E"
                                height="80"
                                width="80"
                              />
                            </motion.div>
                          )}
                        {reserveWithVehicle.vehicle?.type === 'motorbike' &&
                          reserveWithVehicle.vehicle?.size === 3 && (
                            <motion.div
                              animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
                              transition={{ duration: 1 }}
                            >
                              <MotorbikeLarge
                                fillColor="#A7383E"
                                height="80"
                                width="80"
                              />
                            </motion.div>
                          )}
                        {reserveWithVehicle.vehicle?.type === 'other' && (
                          <motion.div
                            animate={{ rotateY: [0, 180, 0], scale: [4, 1] }}
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
                            {reserveWithVehicle.vehicle?.plate}
                          </div>
                        </div>
                        <div tw="mt-3 text-primary-400 font-semibold text-center">
                          {reserveWithVehicle.vehicle?.model}
                        </div>
                      </div>
                    </div>
                  </div>

                  {reserveWithParking.slot?.size <
                    reserveWithVehicle.vehicle?.size && (
                    <div tw="bg-red-600 px-1 rounded-md font-medium text-white ">
                      This slot may be too small for your{' '}
                      {reserveWithVehicle.vehicle?.model}
                    </div>
                  )}
                  <div tw="text-xl  font-semibold flex gap-2">
                    <div tw="text-primary-300">Total amount: </div>{' '}
                    <div tw="text-secondary-400">
                      {' '}
                      {(
                        reserveWithParking.slot?.price *
                        reserveWithParking.period.length
                      )
                        .toString()
                        .replace('.', ',')}{' '}
                      €
                    </div>
                  </div>
                  <div tw="mt-8 flex gap-5">
                    <Link
                      href={`/parking/${reserveWithParking.slot?.parking._id}`}
                    >
                      <MyButton>View parking</MyButton>
                    </Link>

                    <MyButton variant="delete" onClick={handleClickOpen}>
                      Cancel reserve
                    </MyButton>
                  </div>

                  <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                  >
                    <DialogTitle sx={{ m: 0, p: 5 }} id="alert-dialog-title">
                      {'Do you really want to cancel this reserve?'}
                      <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          right: 8,
                          top: 8,
                          color: (theme) => theme.palette.grey[500],
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </DialogTitle>

                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button
                        sx={{ color: '#ff0000' }}
                        onClick={delete_reserve}
                        autoFocus
                      >
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              )}
              {reserve_id && (!reserveWithParking || !reserveWithVehicle) && (
                <div tw="flex flex-col justify-center items-center gap-2">
                  <div tw="text-primary-400 text-3xl font-bold">LOADING</div>
                  <GridLoader color={'#14560D'} size={15} />
                </div>
              )}
              {!reserve_id && (!reserveWithParking || !reserveWithVehicle) && (
                <div tw="p-5 h-full flex justify-center items-center">
                  <h4 tw="text-2xl text-center text-primary-400 font-bold">
                    Select a reserve to see the details
                  </h4>
                </div>
              )}
            </div>
          </div>
        )}
        {!myReserves?.length && (
          <div tw="text-secondary-400 font-medium my-3">
            You have no reserves yet
          </div>
        )}
        <div tw="my-2">
          <Link href={`/reserve/create`}>
            <MyButton icon={<AiOutlinePlus />} variant="submit">
              New reserve
            </MyButton>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
