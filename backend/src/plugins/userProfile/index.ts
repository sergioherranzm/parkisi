import { FastifyPluginAsync } from 'fastify';
import { getUserProfileByAuth0Id } from './routes/getUserProfileByAuth0Id';
import { getUserProfileById } from './routes/getUserProfileById';
import { listUserProfile } from './routes/listUserProfile';

export const userProfilePlugin: FastifyPluginAsync = async (app) => {
  app.register(listUserProfile);
  app.register(getUserProfileByAuth0Id);
  app.register(getUserProfileById);
};
