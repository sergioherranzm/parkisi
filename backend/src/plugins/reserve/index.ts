import { FastifyPluginAsync } from 'fastify';
import { getReserveById } from './routes/getreserveById';
import { getReservesBySlot } from './routes/getReservesBySlot';
import { getReservesByUser } from './routes/getReservesByUser';

export const reservePlugin: FastifyPluginAsync = async (app) => {
  app.register(getReservesBySlot);
  app.register(getReservesByUser);
  app.register(getReserveById);
};
