import sgMail from '@sendgrid/mail';
import { NextApiHandler } from 'next';
import { SENDGRID_API_KEY } from '../../../lib/config';
import axios from 'axios';

const api_route: NextApiHandler = async (req, res) => {
  const token = SENDGRID_API_KEY;
  const url = 'https://api.sendgrid.com/v3/mail/send';

  const mailTo = 'zegio1034@gmail.com';
  const mailFrom = 'sergioherranzm@gmail.com';
  const mailSubject = 'test from workflow';
  const mailTextContent = 'test from workflow';

  const body = `{"personalizations": [{"to": [{"email": "${mailTo}"}]}],"from": {"email": "${mailFrom}"},"subject": "${mailSubject}","content": [{"type": "text/plain", "value": "${mailTextContent}"}]}`;

  const { data } = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  //console.log(data);
};

export default api_route;
