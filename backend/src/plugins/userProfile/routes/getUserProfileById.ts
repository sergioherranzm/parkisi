import { FastifyPluginAsync } from 'fastify';
import { UserProfileModel } from '../model/UserProfileModel';

export const getUserProfileById: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { userId: string } }>(
    '/detail/:userId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { userId } = request.params;
      const user = await UserProfileModel.findById(userId)
        .populate('parkings vehicles reserves')
        .lean();

      return user;
    }
  );
};
