import { FastifyPluginAsync } from 'fastify';
import { VehicleModel } from '../model/VehicleModel';

export const createVehicle: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
  }>('/', async (request, reply) => {
    const newVehicle = await VehicleModel.create(JSON.parse(request.body));

    console.log('NEW vehicle created:', JSON.parse(request.body));

    return { vehicleId: newVehicle._id };
  });
};
