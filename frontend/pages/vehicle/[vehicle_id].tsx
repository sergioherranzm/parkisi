import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { Button as MyButton } from '../../components/shared/Button';
import { useState } from 'react';
import { GridLoader } from 'react-spinners';
import { AnimatePresence } from 'framer-motion';
import { IoChevronBack } from 'react-icons/io5';
import { VehicleFormUpdate } from '../../components/forms/VehicleFormUpdate';
import { Button } from '@mui/material';
import Link from 'next/link';

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
    <AnimatePresence>
      <div tw="p-3 rounded-b-lg bg-white">
        <Link href={`/user/myProfile`}>
          <MyButton variant="neutral" icon={<IoChevronBack size={18} />}>
            Back
          </MyButton>
        </Link>

        {vehicle && isOwner && (
          <div tw="flex flex-col gap-3">
            <h1 tw="text-5xl font-extrabold">
              <p tw="text-primary-400 inline">My vehicle </p>
              <p tw="text-secondary-300 inline">{vehicle?.plate}</p>
            </h1>
            <VehicleFormUpdate />
            <div>
              <MyButton variant={'delete'} onClick={handleClickOpen}>
                Delete vehicle
              </MyButton>
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
            </div>
          </div>
        )}
        {!vehicle && (
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
