import { FastifyPluginAsync } from 'fastify';
import { UserProfileModel } from '../model/UserProfileModel';

export const updateUserProfile: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
    Params: { userId: string };
  }>('/detail/:userId', async (request, reply) => {
    const { userId } = request.params;
    const userProfile = await UserProfileModel.findByIdAndUpdate(
      userId,
      JSON.parse(request.body)
    );

    //console.log('UPDATED profile:', JSON.parse(request.body));

    return { updatedUser: userId };
  });
};
