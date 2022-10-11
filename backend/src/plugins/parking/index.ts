import { FastifyPluginAsync } from 'fastify';
import { createParking } from './routes/createParking';
import { getParkingById } from './routes/getParkingById';
import { getParkingsByUser } from './routes/getParkingsByUser';
import { getParkingsCloseToAddress } from './routes/getParkingsCloseToAddress';

export const parkingPlugin: FastifyPluginAsync = async (app) => {
  app.register(getParkingsByUser);
  app.register(getParkingById);
  app.register(getParkingsCloseToAddress);
  app.register(createParking);
};
