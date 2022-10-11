import { FastifyPluginAsync } from 'fastify';
import { UserProfileModel } from '../model/UserProfileModel';

export const listUserProfile: FastifyPluginAsync = async (app) => {
  app.get(
    '/list',
    { preValidation: app.authenticate },
    async (request, reply) => {
      let userProfiles = await UserProfileModel.find().lean();
      return userProfiles;
    }
  );
};
