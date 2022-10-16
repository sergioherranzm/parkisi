import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Carousel from 'react-material-ui-carousel';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import axios, { AxiosResponse } from 'axios';
import { Button as MyButton } from '../../components/shared/Button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { StaticMap } from '../../components/maps/StaticMap';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { AnimatePresence } from 'framer-motion';
import { GridLoader } from 'react-spinners';
import { Alert } from '@mui/material';
import Link from 'next/link';
import { StaticDatePickerWidget } from '../../components/StaticDatePickerWidget';
import { difficultyMap } from '../../types/difficultyMap';
import { sizesMap } from '../../types/sizesMap';
import tw from 'twin.macro';
import { AiOutlinePlus } from 'react-icons/ai';

const Page = () => {
  const router = useRouter();
  const {
    query: { parking_id, newSlot, deleteSlot },
  } = router;

  const { data: parking } = useSWR(
    parking_id ? `/parking/detail/${parking_id}` : null
  );

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const isOwner = parking?.owner === userProfile?._id;

  const delete_parking = async () => {
    const url = `${PROXY_URL}/reserve/list/parking/${parking._id}`;
    const deleteResponse: AxiosResponse = await axios.delete(url);
    if (deleteResponse.status === 200) {
      const url1 = `${PROXY_URL}/slot/list/${parking_id}`;
      const deleteResponse1: AxiosResponse = await axios.delete(url1);
      if (deleteResponse1.status === 200) {
        const url2 = `${PROXY_URL}/parking/detail/${parking_id}`;
        const deleteResponse2: AxiosResponse = await axios.delete(url2);
        if (deleteResponse2.status === 200) {
          //send mail
          const mailType = 'parkingDeletion';
          const mailTo = userProfile.email;
          const address = parking.address;
          const description = parking.description;
          const hyperlink = `${FRONT_URL}parking/list`;
          const url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&description=${description}&hyperlink=${hyperlink}`;
          const sendMailResponse: AxiosResponse = await axios.get(url_mail);
          //redirection
          router.push(`/parking/list?deleteParking=true`);
        } else {
          throw new Error('Parking deletion failed');
        }
      } else {
        throw new Error('Parking slots deletion failed');
      }
    } else {
      throw new Error('Parking slots reserves deletion failed');
    }
  };

  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        {parking && (
          <div tw=" p-3 rounded-lg">
            <h1 tw="text-5xl font-extrabold mb-3">
              <p tw="text-primary-400 inline">Parking </p>
              <p tw="text-secondary-300 inline">
                {parking.street}, {parking.streetNumber}
              </p>
            </h1>
            {newSlot && (
              <Alert tw="my-2" severity="info">
                New slot created
              </Alert>
            )}
            {deleteSlot && (
              <Alert tw="my-2" severity="error">
                Slot deleted
              </Alert>
            )}

            <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg flex justify-between">
              <div tw="flex flex-col justify-between gap-3">
                <div tw="flex flex-col h-full">
                  <div tw="">
                    <p tw="text-secondary-300 font-semibold text-4xl">
                      {parking.street}, {parking.streetNumber}
                    </p>
                    <p tw="text-primary-400 font-semibold text-2xl">
                      {parking.city}
                    </p>
                    <div tw="flex">
                      <p tw="text-primary-300 text-2xl">{parking.province}</p>
                      <p tw="text-primary-300 text-2xl">
                        &nbsp;
                        {parking.postalCode}
                      </p>
                    </div>
                  </div>
                  <div tw="">
                    <p tw="text-gray-500 italic text-xl">
                      {parking.description}
                    </p>
                  </div>
                </div>
                <div>
                  <p tw="text-primary-400 font-normal text-2xl inline">
                    Number of parking slots:{' '}
                  </p>
                  <p tw="text-secondary-300 font-semibold text-2xl inline">
                    {parking?.slots.length}
                  </p>
                </div>
                {isOwner && (
                  <div tw="">
                    <MyButton variant={'delete'} onClick={handleClickOpen}>
                      Delete parking
                    </MyButton>
                    <Dialog
                      open={openDialog}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                    >
                      <DialogTitle sx={{ m: 0, p: 5 }} id="alert-dialog-title">
                        {'Do you really want to delete this parking?'}
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
                          onClick={delete_parking}
                          autoFocus
                        >
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                )}
              </div>
              <div tw="min-w-max">
                <StaticMap
                  size="400x300"
                  zoom={17}
                  markers={[
                    {
                      coordinates: parking.location.coordinates,
                      color: 'purple',
                      label: 'P',
                    },
                  ]}
                />
              </div>
            </div>
            <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg flex flex-col items-center">
              <h4 tw="text-2xl text-center text-primary-400 font-bold">
                Parking slots
              </h4>
              {parking.slots?.length > 0 && (
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
                    {parking.slots.map((slot) => (
                      <div
                        key={slot._id}
                        tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col gap-3 min-w-max"
                      >
                        {newSlot === slot._id && (
                          <div tw="bg-secondary-200 text-primary-500 px-1 rounded-md font-semibold max-w-max absolute text-xl">
                            NEW
                          </div>
                        )}
                        <div tw="rounded-lg flex flex-col justify-center items-center gap-3">
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
                          <Link href={`/slot/${slot._id}`}>
                            <MyButton variant="neutral">View</MyButton>
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
              {parking.slots?.length === 0 && (
                <div tw="text-secondary-400 font-medium my-3">
                  This parking has no parking slots yet
                </div>
              )}
              {isOwner && (
                <div tw="my-2">
                  <Link href={`/slot/create?parkingId=${parking_id}`}>
                    <MyButton icon={<AiOutlinePlus />} variant="submit">
                      New slot
                    </MyButton>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
        {!parking && (
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
