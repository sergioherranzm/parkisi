import { FastifyPluginAsync } from 'fastify';
import { UserProfileModel } from '../model/UserProfileModel';

export const addCategory: FastifyPluginAsync = async (app) => {
  app.post<{ Body: { title: string; description: string } }>(
    '/',
    async (request, reply) => {
      const { title, description } = request.body; //añadir try catch para name repetido

      const name = title.replace(/\s/g, '');

      await UserProfileModel.create({ name, title, description });
      reply.redirect('/category/list');
    }
  );
};
