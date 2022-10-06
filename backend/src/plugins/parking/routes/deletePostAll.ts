import { FastifyPluginAsync } from 'fastify';
import { PostModel } from '../model/PostModel';

export const deletePostAll: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { name: string } }>(
    '/deleteAll',
    async (request, reply) => {
      try {
        await PostModel.collection.drop();
      } catch (error) {
        console.log('No post to drop');
      }
      reply.redirect(`/category/list`);
    }
  );
};
