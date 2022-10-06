import { FastifyPluginAsync } from 'fastify';
import mongoose from 'mongoose';
import { DB_URL } from './config';

export const databasePlugin: FastifyPluginAsync = async (app) => {
  mongoose.connect(DB_URL).then(() => {
    app.log.info(`✅ Database connection successfull`);
  });
  app.log.info(`BBDD=${DB_URL}`);
};
