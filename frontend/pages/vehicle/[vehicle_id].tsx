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
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { sizesMap } from '../../types/sizesMap';
import { typesMap } from '../../types/typesMap';
import { useState } from 'react';

const Page = () => {
  const router = useRouter();
  const {
    query: { vehicle_id },
  } = router;

  const { data: vehicle } = useSWR(
    vehicle_id ? `/vehicle/detail/${vehicle_id}` : null
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

  const isOwner = vehicle?.owner === userProfile?._id;

  const delete_vehicle = async () => {
    const url = `${PROXY_URL}/vehicle/detail/${vehicle_id}`;
    const deleteResponse: AxiosResponse = await axios.delete(url);
    if (deleteResponse.status === 200) {
      //send mail
      const mailType = 'vehicleDeletion';
      const mailTo = userProfile.email;
      const model = vehicle?.model;
      const plate = vehicle?.plate;
      const hyperlink = `${FRONT_URL}user/myProfile`;
      const url_mail = `${MAILER_URL}/sendMail?mailType=${mailType}&mailTo=${mailTo}&model=${model}&plate=${plate}&hyperlink=${hyperlink}`;
      const sendMailResponse: AxiosResponse = await axios.get(url_mail);
      //redirection
      router.push(`/user/myProfile?deleteVehicle=true`);
    } else {
      throw new Error('Vehicle deletion failed');
    }
  };

  return (
    <>
      <div tw=" mx-auto ">
        <button
          tw="border border-black bg-gray-300 p-1"
          onClick={() => router.push(`/user/myProfile`)}
        >
          Back
        </button>
        <h1 tw="text-4xl font-extrabold">VEHICLE DETAIL</h1>
        <div tw="my-2">
          {vehicle && (
            <div tw=" p-3 rounded-lg bg-white">
              <h4 tw="text-4xl inline">{vehicle.plate}</h4>
              {isOwner && (
                <>
                  <button
                    tw="border border-black bg-red-400 p-1 m-2"
                    onClick={handleClickOpen}
                  >
                    Delete vehicle
                  </button>
                  <Dialog
                    open={openDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                  >
                    <DialogTitle sx={{ m: 0, p: 5 }} id="alert-dialog-title">
                      {'Do you really want to delete this vehicle?'}
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
                        onClick={delete_vehicle}
                        autoFocus
                      >
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </>
              )}
              <p tw="text-gray-500">Model: {vehicle.model}</p>
              <p>Type: {typesMap[vehicle.type]}</p>
              <p>Size: {sizesMap[vehicle.size]}</p>
              <p>
                WIP: WIP: Put in form mode to allow modification of certain
                fields
              </p>
            </div>
          )}
          {!vehicle && <p>Vehicle not found</p>}
        </div>
      </div>
    </>
  );
};

export default withPageAuthRequired(Page);
