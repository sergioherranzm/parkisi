import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';
import { BACK_URL, FRONT_URL } from '../../../lib/config';

const api_route: NextApiHandler = async (req, res) => {
  const { slotId, userId, periodString, vehicleId } = req.query as {
    slotId: string;
    userId: string;
    periodString: string;
    vehicleId: string;
  };
  const period: string[] = periodString.split(';');
  const token = await getAccessToken(req, res);

  //Create reserve in DB
  const options = {
    method: 'POST',
    body: JSON.stringify({
      period: period,
      slot: slotId,
      owner: userId,
      vehicle: vehicleId,
    }),
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  };

  const url = BACK_URL + 'reserve';
  const fectchResponse = await fetch(url, options);
  const reserve = await fectchResponse.json();

  if (fectchResponse.status === 200) {
    // Send mail
    /*
    const mailType = 'reserveCreation';
    const mailTo = userProfile.email;
    const address = reserveWithParking?.slot?.parking?.address;
    const period = `from ${reserveWithParking?.period[0]} to ${
      reserveWithParking?.period[reserveWithParking?.period.length - 1]
    } (${reserveWithParking?.period.length} days)`;
    const hyperlink = `${FRONT_URL}reserve/list`;
    const url_mail = `${MAILER_URL}/sendMail?mailTtype=${mailType}&mailTo=${mailTo}&address=${address}&period=${period}&hyperlink=${hyperlink}&`;
    const sendMailResponse: AxiosResponse = await axios.get(url_mail);
    */
    // Redirection
    res.redirect(
      303,
      `${FRONT_URL}reserve/list?newReserve=${reserve.reserveId}`
    );
  } else {
    throw new Error(
      'Creation of reserve failed. Please contact our support team.'
    );
  }
};

export default api_route;
