import { FastifyPluginAsync } from 'fastify';
import { UserProfileModel } from '../model/UserProfileModel';

export const getUserProfileByAuth0Id: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { auth0Id: string } }>(
    '/:auth0Id',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { auth0Id } = request.params;
      const userProfile = await UserProfileModel.findOne({
        auth0_id: auth0Id,
      })
        .populate('reserves parkings vehicles')
        .lean();

      return userProfile;
    }
  );
};
