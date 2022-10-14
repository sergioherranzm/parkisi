import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../../slot/model/SlotModel';
import { ReserveModel } from '../model/ReserveModel';

export const deleteReservesByParking: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { parkingId: string } }>(
    '/list/parking/:parkingId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { parkingId } = request.params;

      const slots = await SlotModel.find({ parking: parkingId });

      slots.forEach(async (slot) => {
        const reserves = await ReserveModel.deleteMany({
          slot: slot._id,
        });
      });

      return {
        message: `Reserves of slots of parking ${parkingId} delete request OK`,
      };
    }
  );
};
