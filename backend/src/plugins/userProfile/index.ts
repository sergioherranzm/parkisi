import { FastifyPluginAsync } from 'fastify';
import { addCategory } from './routes/addCategory';
import { categoryList } from './routes/categoryList';
import { deleteCategory } from './routes/deleteCategory';
import { deleteCategoryAll } from './routes/deleteCategoryAll';
import { getCategory } from './routes/getCategory';

export const userProfilePlugin: FastifyPluginAsync = async (app) => {
  app.register(addCategory);
  app.register(getCategory);
  app.register(categoryList);
  app.register(deleteCategory);
  app.register(deleteCategoryAll);
};
