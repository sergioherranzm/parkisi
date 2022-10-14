import { FastifyPluginAsync } from 'fastify';
import { ReserveModel } from '../model/ReserveModel';

export const deleteReservesBySlot: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { slotId: string } }>(
    '/list/slot/:slotId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { slotId } = request.params;

      const reserves = await ReserveModel.deleteMany({ slot: slotId });

      return { message: `Reserves of slot ${slotId} delete request OK` };
    }
  );
};
