import { FastifyPluginAsync } from 'fastify';
import { createVehicle } from './routes/createVehicle';
import { deleteVehicleById } from './routes/deleteVehicleById';
import { getVhicleById } from './routes/getVehicleById';
import { getVhicleByPlate } from './routes/getVehicleByPlate';
import { getVehiclesByUser } from './routes/getVehiclesByUser';
import { updateVehicle } from './routes/updateVehicle';

export const vehiclePlugin: FastifyPluginAsync = async (app) => {
  app.register(getVehiclesByUser);
  app.register(getVhicleById);
  app.register(getVhicleByPlate);
  app.register(createVehicle);
  app.register(deleteVehicleById);
  app.register(updateVehicle);
};
