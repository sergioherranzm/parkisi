import { FastifyPluginAsync } from 'fastify';
import { CategoryModel } from '../../userProfile/models/UserProfileModel';
import { PostModel } from '../model/ParkingModel';

export const getPost: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { postId: string } }>(
    '/:postId',
    async (request, reply) => {
      const { postId } = request.params;
      const selPost = await PostModel.findById(postId).lean();
      const selCat = await CategoryModel.findById(
        selPost?.associatedCategory
      ).lean();
      return reply.view('postExpanded', {
        selPost,
        selCat,
      });
    }
  );
};
