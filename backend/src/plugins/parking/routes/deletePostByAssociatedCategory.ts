import { FastifyPluginAsync } from 'fastify';

export const deletePostByAssociatedCategory: FastifyPluginAsync = async (
  app
) => {
  app.get<{
    Querystring: { associatedCategory: string };
  }>('/delete', async (request, reply) => {
    const { associatedCategory } = request.query;
    //await PostModel.deleteMany({ associatedCategory });
    reply.redirect(`/category/list`);
  });
};
