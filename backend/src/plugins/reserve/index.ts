import { FastifyPluginAsync } from 'fastify';
import { createReserve } from './routes/createReserve';
import { deleteReserveById } from './routes/deleteReserveById';
import { deleteReservesByParking } from './routes/deleteReservesByParking';
import { deleteReservesBySlot } from './routes/deleteReservesBySlot';
import { getReserveById } from './routes/getReserveById';
import { getReservesByParking } from './routes/getReservesByParking';
import { getReservesBySlot } from './routes/getReservesBySlot';
import { getReservesByUser } from './routes/getReservesByUser';

export const reservePlugin: FastifyPluginAsync = async (app) => {
  app.register(getReservesBySlot);
  app.register(getReservesByUser);
  app.register(getReserveById);
  app.register(deleteReserveById);
  app.register(deleteReservesBySlot);
  app.register(deleteReservesByParking);
  app.register(getReservesByParking);
  app.register(createReserve);
};
