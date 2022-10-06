import { FastifyPluginAsync } from 'fastify';
import { CategoryModel } from '../models/UserProfileModel';

export const categoryList: FastifyPluginAsync = async (app) => {
  app.get('/list', async (request, reply) => {
    const categories = await CategoryModel.find().lean();
    return reply.view('/categoryList', {
      categories,
    });
  });
};
