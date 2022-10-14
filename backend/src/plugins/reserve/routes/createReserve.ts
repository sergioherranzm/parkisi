import { FastifyPluginAsync } from 'fastify';
import { ReserveModel } from '../model/ReserveModel';

export const createReserve: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
  }>('/', async (request, reply) => {
    const newReserve = await ReserveModel.create(JSON.parse(request.body));

    console.log('NEW reserve created:', JSON.parse(request.body));

    return {
      reserveId: newReserve._id,
    };
  });
};
