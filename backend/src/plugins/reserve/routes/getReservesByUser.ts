import { FastifyPluginAsync } from 'fastify';
import { getUserIdByAuth0Id } from '../../../utils/getUserIdByAuth0Id';
import { ReserveModel } from '../model/ReserveModel';

export const getReservesByUser: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { auth0Id: string } }>(
    '/list/user/:auth0Id',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { auth0Id } = request.params;
      const user_id = await getUserIdByAuth0Id(auth0Id);
      const listReservesWithParking = await ReserveModel.find({
        owner: user_id,
      })
        .populate({
          path: 'slot',
          populate: { path: 'parking' },
        })
        .lean();

      return listReservesWithParking;
    }
  );
};
