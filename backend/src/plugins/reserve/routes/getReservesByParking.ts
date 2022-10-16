import { FastifyPluginAsync } from 'fastify';
import { SlotModel } from '../../slot/model/SlotModel';
import { ReserveDocument, ReserveModel } from '../model/ReserveModel';

export const getReservesByParking: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { parkingId: string } }>(
    '/list/parking/:parkingId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { parkingId } = request.params;

      const slots = await SlotModel.find({ parking: parkingId });

      let reservesArray: any[] = [];

      slots.forEach(async (slot) => {
        const reserves = await ReserveModel.find({
          slot: slot._id,
        })
          .populate('vehicle')
          .lean();

        reservesArray.push(reserves);
      });

      //console.log(reservesArray);

      return reservesArray;
    }
  );
};
