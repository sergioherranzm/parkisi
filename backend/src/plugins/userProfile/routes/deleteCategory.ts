import { FastifyPluginAsync } from 'fastify';
import {
  UserProfileDocument,
  UserProfileModel,
} from '../model/UserProfileModel';

export const deleteCategory: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { name: string } }>(
    '/:name/delete',
    async (request, reply) => {
      const { name } = request.params;
      const selCat = (await UserProfileModel.findOneAndDelete({
        name,
      })) as UserProfileDocument;
      reply.redirect(`/post/delete?associatedCategory=${selCat['_id']}`);
    }
  );
};
