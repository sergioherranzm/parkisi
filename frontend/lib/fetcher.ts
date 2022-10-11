import { MAPS_API_URL, PROXY_URL } from './config';

export const fetcher = async (key: string) => {
  const url = PROXY_URL + key;
  const res = await fetch(url);
  return res.json();
};

export const fetcher_maps = async (key: string) => {
  const url = MAPS_API_URL + key;
  const res = await fetch(url);
  return res.json();
};
