import { FastifyPluginAsync } from 'fastify';
import { UserProfileModel } from '../model/UserProfileModel';

export const deleteCategoryAll: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { name: string } }>(
    '/deleteAll',
    async (request, reply) => {
      try {
        await UserProfileModel.collection.drop();
      } catch (error) {
        console.log('No category to drop');
      }
      reply.redirect(`/post/deleteAll`);
    }
  );
};
