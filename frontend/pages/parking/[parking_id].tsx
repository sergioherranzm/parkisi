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
import { StaticMap } from '../../components/maps/StaticMap';
import { FRONT_URL, MAILER_URL, PROXY_URL } from '../../lib/config';
import { sizesMap } from '../../types/sizesMap';

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
    <>
      <div tw=" mx-auto ">
        <h1 tw="text-4xl font-extrabold">PARKING DETAIL</h1>
        {newSlot && (
          <div tw="text-green-500 bg-green-300">New slot created</div>
        )}
        {deleteSlot && <div tw="text-green-500 bg-green-300">Slot deleted</div>}
        <div tw="my-2">
          {parking && (
            <div tw=" p-3 rounded-lg bg-white">
              <h4 tw="text-4xl inline">Parking on {parking.address} street</h4>
              {isOwner && (
                <>
                  <button
                    tw="border border-black bg-red-400 p-1 m-2"
                    onClick={handleClickOpen}
                  >
                    Remove parking
                  </button>
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
                </>
              )}
              <p tw="text-gray-500">{parking.description}</p>
              <div>
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
              {parking.slots?.length > 0 && (
                <>
                  <div tw="text-lg mt-5">SLOTS</div>
                  <div tw="flex">
                    {parking.slots.map((slot) => (
                      <div key={slot._id} tw="border p-1">
                        {newSlot === slot._id && (
                          <div tw="text-green-500 bg-green-300">NEW</div>
                        )}
                        <h3>Slot {slot.identification}</h3>
                        <p>Size: {sizesMap[slot?.size]}</p>
                        <p>Parking difficulty: {slot.difficulty}</p>
                        <p>Price: {slot.price}€/day</p>
                        <button
                          tw="border border-black bg-gray-300 p-1"
                          onClick={() => router.push(`/slot/${slot._id}`)}
                        >
                          Select
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {parking.slots?.length === 0 && (
                <div tw="text-lg mt-5">
                  This parking has no parking slots yet
                </div>
              )}
              {isOwner && (
                <button
                  tw="border border-black bg-gray-300 p-3 text-xl"
                  onClick={() =>
                    router.push(`/slot/create?parkingId=${parking_id}`)
                  }
                >
                  Add new parking slot
                </button>
              )}
            </div>
          )}
          {!parking && <p>Parking not found</p>}
        </div>
      </div>
    </>
  );
};

export default withPageAuthRequired(Page);
