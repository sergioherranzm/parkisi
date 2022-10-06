import fastifyStatic from '@fastify/static';
import { FastifyPluginAsync } from 'fastify';
import { FastifyInstance } from 'fastify';
import blipp from 'fastify-blipp';
import path from 'path';
import { databasePlugin } from './database';
import { userProfilePlugin } from './plugins/userProfile';
import { parkingPlugin } from './plugins/parking';
import { slotPlugin } from './plugins/slot';
import { vehiclePlugin } from './plugins/vehicle';
import { reservePlugin } from './plugins/reserve';

export const app: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.log.info('Server starting ...');

  app.register(blipp);

  app.register(databasePlugin);

  app.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
    prefix: '/static',
  });

  app.register(parkingPlugin, { prefix: '/parking' });
  app.register(userProfilePlugin, { prefix: '/userProfile' });
  app.register(slotPlugin, { prefix: '/slot' });
  app.register(vehiclePlugin, { prefix: '/vehicle' });
  app.register(reservePlugin, { prefix: '/reserve' });

  app.blipp();
};
