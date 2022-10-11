import { FastifyPluginAsync } from 'fastify';
import { getSlotById } from './routes/getSlotById';
import { getSlotsByParking } from './routes/getSlotsByParking';

export const slotPlugin: FastifyPluginAsync = async (app) => {
  app.register(getSlotsByParking);
  app.register(getSlotById);
};
