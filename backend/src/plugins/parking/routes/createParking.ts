import { FastifyPluginAsync } from 'fastify';
import { ParkingDocument, ParkingModel } from '../model/ParkingModel';

export const createParking: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
  }>('/', async (request, reply) => {
    const newParking = await ParkingModel.create(JSON.parse(request.body));

    console.log('NEW Parking created:', JSON.parse(request.body));

    return { parkingId: newParking._id };
  });
};
