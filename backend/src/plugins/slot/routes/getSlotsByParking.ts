import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../model/SlotModel';

export const getSlotsByParking: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { parkingId: string } }>(
    '/list/:parkingId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { parkingId } = request.params;
      const slots = await SlotModel.find({ parking: parkingId })
        .populate('reserves')
        .lean();

      return slots;
    }
  );
};
