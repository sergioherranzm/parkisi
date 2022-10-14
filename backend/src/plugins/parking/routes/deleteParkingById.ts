import { FastifyPluginAsync } from 'fastify';
import { ParkingModel } from '../model/ParkingModel';

export const deleteParkingById: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { parkingId: string } }>(
    '/detail/:parkingId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { parkingId } = request.params;
      const parking = await ParkingModel.findByIdAndDelete(parkingId);

      return { message: `Parking ${parkingId} delete request OK` };
    }
  );
};
