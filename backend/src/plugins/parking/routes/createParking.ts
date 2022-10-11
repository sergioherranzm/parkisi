import { FastifyPluginAsync } from 'fastify';
import { ParkingDocument, ParkingModel } from '../model/ParkingModel';

export const createParking: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
    //Querystring: { categoryName: string };
  }>('/', async (request, reply) => {
    await ParkingModel.create(JSON.parse(request.body));

    console.log('NEW Parking created:', JSON.parse(request.body));

    //reply.redirect(`${FRONT_URL}/parking/list`);
    return { message: 'createParking post request OK' };
  });
};
