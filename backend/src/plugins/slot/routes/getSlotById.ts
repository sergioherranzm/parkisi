import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../model/SlotModel';

export const getSlotById: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { slotId: string } }>(
    '/detail/:slotId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { slotId } = request.params;
      const slot = await SlotModel.findById(slotId)
        .populate('reserves parking')
        .lean();

      return slot;
    }
  );
};
