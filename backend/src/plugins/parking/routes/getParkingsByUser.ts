import { FastifyPluginAsync } from 'fastify';
import { getUserIdByAuth0Id } from '../../../utils/getUserIdByAuth0Id';
import { ParkingModel } from '../model/ParkingModel';

export const getParkingsByUser: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { auth0Id: string } }>(
    '/list/:auth0Id',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { auth0Id } = request.params;
      const user_id = await getUserIdByAuth0Id(auth0Id);
      const listParking = await ParkingModel.find({ owner: user_id })
        .populate('slots')
        .lean();

      //console.log('LIST OF PARKINGS', listParking);
      return listParking;
    }
  );
};
