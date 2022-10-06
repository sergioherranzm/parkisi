import { FastifyPluginAsync } from 'fastify';
import {
  CategoryDocument,
  CategoryModel,
} from '../../userProfile/models/UserProfileModel';
import { PostModel } from '../model/ParkingModel';

export const addPost: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: { title: string; text: string };
    Querystring: { categoryName: string };
  }>('/', async (request, reply) => {
    const { title, text } = request.body;
    const { categoryName } = request.query;

    const selCat = (await CategoryModel.findOne({
      name: categoryName,
    })) as CategoryDocument;

    await PostModel.create({
      title,
      text,
      img: `https://source.unsplash.com/random/?${categoryName}`,
      associatedCategory: selCat['_id'],
    });

    reply.redirect(`/category/${categoryName}`);
  });
};
