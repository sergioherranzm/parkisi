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
    return {
      welcomeTo: 'PARKISI backend',
      currentTime: new Date(Date.now()).toLocaleString() + ' server local time',
      endPoints: [
        ['GET', '/'],
        ['GET', '/userProfile/list'],
        ['GET', '/userProfile/:auth0Id'],
        ['GET', '/userProfile/detail/:userId'],
        ['GET', '/parking/list/:auth0Id'],
        ['GET', '/parking/address?lat&lng&limit&maxKm'],
        ['GET', '/parking/detail/:parkingId'],
        ['DELETE', '/parking/detail/:parkingId'],
        ['POST', '/parking'],
        ['GET', '/slot/detail/:slotId'],
        ['DELETE', '/slot/detail/:slotId'],
        ['GET', '/slot/list/:parkingId'],
        ['DELETE', '/slot/list/:parkingId'],
        ['POST', '/slot'],
        ['GET', '/vehicle/list/:auth0Id'],
        ['GET', '/vehicle/plate/:vehiclePlate'],
        ['GET', '/vehicle/detail/:vehicleId'],
        ['DELETE', '/vehicle/detail/:vehicleId'],
        ['POST', '/vehicle'],
        ['GET', '/reserve/list/user/:auth0Id'],
        ['GET', '/reserve/detail/:reserveId'],
        ['GET', '/reserve/list/slot/:slotId'],
        ['DELETE', '/reserve/list/slot/:slotId'],
        ['DELETE', '/reserve/list/parking/:parkingId'],
        ['DELETE', '/reserve/detail/:reserveId'],
        ['POST', '/reserve'],
      ],
      note: 'All endpoints but this one require authorization token',
    };
  });
};
