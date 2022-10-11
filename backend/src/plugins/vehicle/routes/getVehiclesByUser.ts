import { FastifyPluginAsync } from 'fastify';
import { getUserIdByAuth0Id } from '../../../utils/getUserIdByAuth0Id';
import { VehicleModel } from '../model/VehicleModel';

export const getVehiclesByUser: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { auth0Id: string } }>(
    '/list/:auth0Id',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { auth0Id } = request.params;
      const user_id = await getUserIdByAuth0Id(auth0Id);
      const listVehicles = await VehicleModel.find({ owner: user_id }).lean();

      return listVehicles;
    }
  );
};
