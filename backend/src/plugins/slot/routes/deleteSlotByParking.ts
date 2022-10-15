import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../model/SlotModel';

export const deleteSlotsByParking: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { parkingId: string } }>(
    '/list/:parkingId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { parkingId } = request.params;

      const slots = await SlotModel.deleteMany({ parking: parkingId });

      return { message: `Slots of parking ${parkingId} delete request OK` };
    }
  );
};
