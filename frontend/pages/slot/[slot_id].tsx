import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { CheckoutSlotForm } from '../../components/forms/CheckoutSlotForm';
import { StaticDatePickerWidget } from '../../components/StaticDatePickerWidget';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { sizesMap } from '../../types/sizesMap';
import { useState } from 'react';

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
        const address = slot?.parking?.address;
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
                <>
                  <button
                    tw="border border-black bg-red-400 p-1 m-2"
                    onClick={handleClickOpen}
                  >
                    Remove slot
                  </button>
                  <p>You are the owner of this parking</p>
                  <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                  >
                    <DialogTitle sx={{ m: 0, p: 5 }} id="alert-dialog-title">
                      {'Do you really want to delete this parking slot?'}
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
                </>
              )}
              <p tw="text-gray-500">Situated on {slot?.parking?.address}</p>
              <p>Size: {sizesMap[slot?.size]}</p>
              <p>Parking difficulty: {slot?.difficulty}</p>
              <p>Price: {slot?.price}€/day</p>
              {isOwner && (
                <div tw="border">
                  <div tw="text-lg my-5">AVAILABILITY:</div>
                  <StaticDatePickerWidget slotId={slot._id} />
                </div>
              )}
              {!isOwner && vehicleId && (
                <>
                  <div tw="">
                    <div tw="text-lg">RESERVE PERIOD:</div>
                    <CheckoutSlotForm vehicleId={vehicleId} slotId={slot._id} />
                  </div>
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

export default withPageAuthRequired(Page);
