import { FastifyPluginAsync } from 'fastify';
import { CategoryModel } from '../../category/models/CategoryModel';
import { PostDocument, PostModel } from '../model/PostModel';

export const postList: FastifyPluginAsync = async (app) => {
  app.get<{
    Querystring: { filter: string };
  }>('/list', async (request, reply) => {
    const filter = request.query.filter ?? 'All';

    const categories = await CategoryModel.find().lean();

    let posts: PostDocument[];

    if (filter === 'All') {
      posts = await PostModel.find().lean();
    } else {
      const category = await CategoryModel.findOne({ name: filter }).lean();
      posts = await PostModel.find({
        associatedCategory: category?._id,
      }).lean();
    }

    return reply.view('/postList', {
      posts,
      categories,
      filter,
    });
  });
};
