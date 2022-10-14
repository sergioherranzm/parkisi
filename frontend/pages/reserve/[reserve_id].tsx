import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';

const Page = () => {
  const router = useRouter();
  const {
    query: { reserve_id },
  } = router;

  const { user } = useUser();
  const { data: userProfile } = useSWR(
    user?.sub ? `/userProfile/${user?.sub}` : null
  );

  const { data } = useSWR(reserve_id ? `/reserve/detail/${reserve_id}` : null);
  const reserveWithParking = data?.reserveWithParking;
  const reserveWithVehicle = data?.reserveWithVehicle;

  const { data: userProfileOwner } = useSWR(
    reserveWithParking?.slot?.parking?.owner
      ? `/userProfile/detail/${reserveWithParking?.slot?.parking?.owner}`
      : null
  );

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const isOwner = reserveWithParking?.owner === userProfile?._id;

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
      router.push(`/reserve/list?deleteReserve=true`);
    } else {
      throw new Error('Reserve deletion failed');
    }
  };

  return (
    <>
      <div tw=" mx-auto ">
        <button
          tw="border border-black bg-gray-300 p-1"
          onClick={() => router.push(`/reserve/list`)}
        >
          Back
        </button>
        <h1 tw="text-4xl font-extrabold">RESERVE DETAIL</h1>
        <div tw="my-2">
          {reserveWithParking && reserveWithVehicle && (
            <>
              <div tw="p-3 rounded-lg bg-white">
                <h4 tw="text-4xl">
                  Reserve on {reserveWithParking.slot?.parking.address}
                </h4>
                <button
                  tw="border border-black bg-gray-400 p-1 m-2"
                  onClick={() =>
                    router.push(
                      `/parking/${reserveWithParking.slot?.parking._id}`
                    )
                  }
                >
                  View parking
                </button>
                <h4 tw="text-2xl">
                  {' '}
                  Period: from {reserveWithParking.period[0]} to{' '}
                  {
                    reserveWithParking.period[
                      reserveWithParking.period.length - 1
                    ]
                  }
                </h4>
                <p>Slot: {reserveWithParking.slot?.identification}</p>
                <p>Vehicle: {reserveWithVehicle.vehicle?.plate}</p>
                {reserveWithParking.slot?.size <
                  reserveWithVehicle.vehicle?.size && (
                  <p tw="text-red-600 font-bold">
                    This slot may be too small for your{' '}
                    {reserveWithVehicle.vehicle?.model}
                  </p>
                )}
                {isOwner && (
                  <>
                    <button
                      tw="border border-black bg-red-400 p-1 m-2"
                      onClick={handleClickOpen}
                    >
                      Cancel reserve
                    </button>
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
                  </>
                )}
              </div>
            </>
          )}
          {(!reserveWithParking || !reserveWithVehicle) && (
            <p>Reserve not found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default withPageAuthRequired(Page);
