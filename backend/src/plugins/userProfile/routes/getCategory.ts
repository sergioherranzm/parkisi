import { FastifyPluginAsync } from 'fastify';
import { CategoryModel } from '../models/CategoryModel';

export const getCategory: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { name: string } }>('/:name', async (request, reply) => {
    const { name } = request.params;
    const selCat: any = await CategoryModel.findOne({ name })
      .populate('posts')
      .lean();
    return reply.view('categoryPostList', {
      selCat,
    });
  });
};
