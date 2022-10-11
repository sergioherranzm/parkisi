import { FastifyPluginAsync } from 'fastify';
import { ReserveModel } from '../model/ReserveModel';

export const getReservesBySlot: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { slotId: string } }>(
    '/list/slot/:slotId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { slotId } = request.params;
      const reserves = await ReserveModel.find({ slot: slotId })
        .populate('vehicle')
        .lean();

      return reserves;
    }
  );
};
