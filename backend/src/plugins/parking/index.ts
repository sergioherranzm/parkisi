import { FastifyPluginAsync } from 'fastify';
import { addPost } from './routes/addPost';
import { deletePostAll } from './routes/deletePostAll';
import { deletePostByAssociatedCategory } from './routes/deletePostByAssociatedCategory';
import { deletePostById } from './routes/deletePostById';
import { getPost } from './routes/getPost';
import { postList } from './routes/postList';

export const parkingPlugin: FastifyPluginAsync = async (app) => {
  app.register(addPost);
  app.register(getPost);
  app.register(postList);
  app.register(deletePostAll);
  app.register(deletePostById);
  app.register(deletePostByAssociatedCategory);
};
