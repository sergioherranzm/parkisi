import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../model/SlotModel';

export const createSlot: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
  }>('/', async (request, reply) => {
    const newSlot = await SlotModel.create(JSON.parse(request.body));

    console.log('NEW Slot created:', JSON.parse(request.body));

    return { slotId: newSlot._id };
  });
};
