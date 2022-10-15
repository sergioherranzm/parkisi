import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';
import Stripe from 'stripe';
import { BACK_URL, FRONT_URL, STRIPE_SECRET } from '../../../lib/config';

const stripe = new Stripe(STRIPE_SECRET, {
  apiVersion: '2022-08-01',
});

const api_route: NextApiHandler = async (req, res) => {
  const { slotId, userId, periodString, vehicleId } = req.query as {
    slotId: string;
    userId: string;
    periodString: string;
    vehicleId: string;
  };
  const period: string[] = periodString.split(';');

  const token = await getAccessToken(req, res);

  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  };

  const url = BACK_URL + 'slot/detail/' + slotId;
  const fectchResponse = await fetch(url, options);
  const slot = await fectchResponse.json();

  const url2 = BACK_URL + 'userProfile/detail/' + userId;
  const fectchResponse2 = await fetch(url2, options);
  const userProfile = await fectchResponse2.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: `Parking reserve on ${slot.parking.address} street`,
            description: `Reserve from ${period[0]} to ${
              period[period.length - 1]
            } (${period.length} days) in parking slot ${
              slot.identification
            } on ${slot.parking.address} street`,
            images: [slot.parking.image],
          },
          unit_amount: slot.price * 100,
        },
        quantity: period.length,
      },
    ],
    metadata: {
      address: slot.parking.address,
      period: `from ${period[0]} to ${period[period.length - 1]} (${
        period.length
      } days)`,
      hyperlink: `${FRONT_URL}reserve/list`,
    },
    customer_email: userProfile.email,
    mode: 'payment',
    submit_type: 'book',
    success_url: `${FRONT_URL}api/payments/buySuccess?slotId=${slotId}&userId=${userId}&vehicleId=${vehicleId}&periodString=${periodString}`,
    cancel_url: `${FRONT_URL}slot/${slotId}?vehicleId=${vehicleId}`,
  });

  res.redirect(303, session.url);
};

export default api_route;
