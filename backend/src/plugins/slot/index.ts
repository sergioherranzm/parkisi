import { FastifyPluginAsync } from 'fastify';
import { createSlot } from './routes/createSlot';
import { deleteSlotById } from './routes/deleteSlotById';
import { deleteSlotsByParking } from './routes/deleteSlotByParking';
import { getSlotById } from './routes/getSlotById';
import { getSlotsByParking } from './routes/getSlotsByParking';

export const slotPlugin: FastifyPluginAsync = async (app) => {
  app.register(getSlotsByParking);
  app.register(getSlotById);
  app.register(createSlot);
  app.register(deleteSlotById);
  app.register(deleteSlotsByParking);
};
