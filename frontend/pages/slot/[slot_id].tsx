import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import axios, { AxiosResponse } from 'axios';
import { Button as MyButton } from '../../components/shared/Button';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { CheckoutSlotForm } from '../../components/forms/CheckoutSlotForm';
import { StaticDatePickerWidget } from '../../components/StaticDatePickerWidget';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GridLoader } from 'react-spinners';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import tw from 'twin.macro';
import { difficultyMap } from '../../types/difficultyMap';

const Page = (props) => {
  const router = useRouter();
  const {
    query: { vehicleId, slot_id },
  } = router;

  const { data: slot } = useSWR(slot_id ? `/slot/detail/${slot_id}` : null);

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const { data: vehicle } = useSWR(`/vehicle/detail/${vehicleId}`);

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const isOwner = slot?.parking?.owner === userProfile?._id;

  const delete_slot = async () => {
    const url1 = `${PROXY_URL}/reserve/list/slot/${slot._id}`;
    const deleteResponse1: AxiosResponse = await axios.delete(url1);
    if (deleteResponse1.status === 200) {
      const url2 = `${PROXY_URL}/slot/detail/${slot._id}`;
      const deleteResponse2: AxiosResponse = await axios.delete(url2);
      if (deleteResponse2.status === 200) {
        //send mail
        const mailType = 'slotDeletion';
        const mailTo = userProfile.email;
        const address =
          slot?.parking?.street + ', ' + slot?.parking?.streetNumber;
        const description = slot?.parking?.description;
        const identification = slot?.identification;
        const hyperlink = `${FRONT_URL}parking/${slot?.parking?._id}`;
        const url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&address=${address}&description=${description}&identification=${identification}&hyperlink=${hyperlink}`;
        const sendMailResponse: AxiosResponse = await axios.get(url_mail);
        //redirection
        router.push(`/parking/${slot.parking._id}?deleteSlot=true`);
      } else {
        throw new Error('Slot deletion failed');
      }
    } else {
    }
  };

  return (
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        {slot && (
          <div tw="flex flex-col items-center">
            <div>
              <Link href={`/parking/${slot?.parking._id}`}>
                <MyButton variant="neutral" icon={<IoChevronBack size={18} />}>
                  View parking
                </MyButton>
              </Link>

              <div tw="my-2 p-3 border bg-primary-000 border-primary-200 shadow-sm rounded-lg flex flex-col gap-3 max-w-max">
                {!isOwner && vehicleId && (
                  <>
                    {slot.size < vehicle?.size && (
                      <div tw="bg-red-600 px-1 rounded-md font-medium text-white absolute">
                        Maybe too small for your {vehicle.model}
                      </div>
                    )}
                  </>
                )}

                <div tw="my-4 rounded-lg flex flex-col justify-center items-center gap-3">
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
                    <p tw="text-primary-300 inline font-normal"> to park</p>
                  </div>
                  <div tw="text-center text-2xl">
                    <p tw="text-secondary-300 inline font-bold">
                      {slot.price?.toString().replace('.', ',')}
                    </p>
                    <p tw="text-primary-300 inline font-normal"> €/day</p>
                  </div>
                </div>
                {isOwner && (
                  <>
                    <div tw="flex justify-center">
                      <MyButton variant={'delete'} onClick={handleClickOpen}>
                        Delete slot
                      </MyButton>
                      <Dialog
                        open={openDialog}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                      >
                        <DialogTitle
                          sx={{ m: 0, p: 5 }}
                          id="alert-dialog-title"
                        >
                          {'Do you really want to delete this slot?'}
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
                            onClick={delete_slot}
                            autoFocus
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                    <div tw="my-2 w-full flex justify-center items-center">
                      <div tw="border-4 border-primary-200 rounded-md max-w-max">
                        <StaticDatePickerWidget slotId={slot._id} />
                      </div>
                    </div>
                  </>
                )}
                {!isOwner && (
                  <>
                    {vehicleId && (
                      <div tw="my-2 p-3 border border-primary-200 shadow-sm rounded-lg bg-white flex flex-col items-center justify-center gap-3">
                        <h4 tw="text-2xl text-center text-primary-400 font-bold">
                          Place a reserve
                        </h4>
                        <CheckoutSlotForm
                          vehicleId={vehicleId}
                          slotId={slot._id}
                        />
                      </div>
                    )}
                    {!vehicleId && (
                      <>
                        <div tw="flex justify-center">
                          <Link href={'/reserve/create'}>
                            <MyButton variant={'neutral'}>
                              Place a reserve
                            </MyButton>
                          </Link>
                        </div>

                        <div tw="my-2 w-full flex justify-center items-center">
                          <div tw="border-4 border-primary-200 rounded-md max-w-max">
                            <StaticDatePickerWidget slotId={slot._id} />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
        {!slot && (
          <>
            <Link href={`/parking/list`}>
              <MyButton variant="neutral" icon={<IoChevronBack size={18} />}>
                View parking
              </MyButton>
            </Link>
            <div tw="flex flex-col justify-center items-center gap-2">
              <div tw="text-primary-400 text-3xl font-bold">LOADING</div>
              <GridLoader color={'#14560D'} size={15} />
            </div>
          </>
        )}
      </div>
    </AnimatePresence>
  );
};

export default withPageAuthRequired(Page);
