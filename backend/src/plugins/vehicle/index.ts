import { FastifyPluginAsync } from 'fastify';
import { getVhicleById } from './routes/getVehicleById';
import { getVehiclesByUser } from './routes/getVehiclesByUser';

export const vehiclePlugin: FastifyPluginAsync = async (app) => {
  app.register(getVehiclesByUser);
  app.register(getVhicleById);
};
