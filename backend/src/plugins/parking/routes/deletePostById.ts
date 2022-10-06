import { FastifyPluginAsync } from 'fastify';
import {
  CategoryDocument,
  CategoryModel,
} from '../../category/models/CategoryModel';
import { PostDocument, PostModel } from '../model/PostModel';

export const deletePostById: FastifyPluginAsync = async (app) => {
  app.get<{
    Params: { postId: string };
  }>('/:postId/delete', async (request, reply) => {
    const { postId } = request.params;

    const selPost = (await PostModel.findByIdAndDelete({
      _id: postId,
    })) as PostDocument;

    const selCat = (await CategoryModel.findOne({
      _id: selPost.associatedCategory,
    })) as CategoryDocument;

    reply.redirect(`/category/${selCat.name}`);
  });
};
