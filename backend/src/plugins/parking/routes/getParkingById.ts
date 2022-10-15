import { FastifyPluginAsync } from 'fastify';
import { ParkingModel } from '../model/ParkingModel';

export const getParkingById: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { parkingId: string } }>(
    '/detail/:parkingId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { parkingId } = request.params;
      const parking = await ParkingModel.findById(parkingId)
        .populate('slots')
        .lean();

      return parking;
    }
  );
};
