import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextApiHandler } from 'next';
import { BACK_URL } from '../../../lib/config';

const api_route: NextApiHandler = async (req, res) => {
  const token = await getAccessToken(req, res);
  const params = req.query.params as string[];

  let queryParams = '';
  if (Object.entries(req.query).length > 1) {
    queryParams += '?';
    Object.entries(req.query).forEach((item, index) => {
      if (item[0] !== 'params' && queryParams.split('').pop() !== '?') {
        queryParams += '&' + item[0] + '=' + item[1];
      } else if (item[0] !== 'params' && queryParams.split('').pop() === '?') {
        queryParams += item[0] + '=' + item[1];
      }
    });
  }

  const path = params.join('/') + queryParams;

  //console.log('URL=' + path);

  const url = BACK_URL + path;

  const options = {
    method: req.method,
    body: req.body ? JSON.stringify(req.body) : undefined,
    headers: {
      Authorization: `Bearer ${token.accessToken}`,
    },
  };

  const res_api = await fetch(url, options);

  res.status(res_api.status);
  res.json(await res_api.json());
};

export default api_route;
