import fastifyStatic from '@fastify/static';
import { FastifyPluginAsync } from 'fastify';
import { FastifyInstance } from 'fastify';
import path from 'path';
import fastifyAuth0 from 'fastify-auth0-verify';
import { databasePlugin } from './database';
import { userProfilePlugin } from './plugins/userProfile';
import { parkingPlugin } from './plugins/parking';
import { slotPlugin } from './plugins/slot';
import { vehiclePlugin } from './plugins/vehicle';
import { reservePlugin } from './plugins/reserve';
import { getEmailByAuth0Id } from './utils/getEmailByAuth0Id';

export const app: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.log.info('Server starting ...');

  await app.register(fastifyAuth0, {
    domain: 'parkisi.eu.auth0.com',
    audience: 'https://parkisi.eu.auth0.com/api/v2/',
  });

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

  app.get('/', async (request, reply) => {
    //const user = request.user;
    //const userEmail = await getEmailByAuth0Id(request.user.sub);
    return { welcomeTo: 'PARKISI backend', userVisiting: request.user };
  });
};
