import { FastifyPluginAsync } from 'fastify';
import { ReserveModel } from '../model/ReserveModel';

export const getReserveById: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { reserveId: string } }>(
    '/detail/:reserveId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { reserveId } = request.params;
      const reserveWithParking = await ReserveModel.findById(reserveId)
        .populate({
          path: 'slot',
          populate: { path: 'parking' },
        })
        .lean();

      const reserveWithVehicle = await ReserveModel.findById(reserveId)
        .populate('vehicle')
        .lean();

      return { reserveWithParking, reserveWithVehicle };
    }
  );
};
