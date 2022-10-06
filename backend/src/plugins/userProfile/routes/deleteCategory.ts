import { FastifyPluginAsync } from 'fastify';
import { CategoryDocument, CategoryModel } from '../models/CategoryModel';

export const deleteCategory: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { name: string } }>(
    '/:name/delete',
    async (request, reply) => {
      const { name } = request.params;
      const selCat = (await CategoryModel.findOneAndDelete({
        name,
      })) as CategoryDocument;
      reply.redirect(`/post/delete?associatedCategory=${selCat['_id']}`);
    }
  );
};
