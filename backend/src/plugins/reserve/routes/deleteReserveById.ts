import { FastifyPluginAsync } from 'fastify';
import { ReserveModel } from '../model/ReserveModel';

export const deleteReserveById: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { reserveId: string } }>(
    '/detail/:reserveId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { reserveId } = request.params;
      const slot = await ReserveModel.findByIdAndDelete(reserveId);

      return { message: `Reserve ${reserveId} delete request OK` };
    }
  );
};
