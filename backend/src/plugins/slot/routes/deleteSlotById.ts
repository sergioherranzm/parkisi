import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../model/SlotModel';

export const deleteSlotById: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { slotId: string } }>(
    '/detail/:slotId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { slotId } = request.params;
      const slot = await SlotModel.findByIdAndDelete(slotId);

      return { message: `Slot ${slotId} delete request OK` };
    }
  );
};
