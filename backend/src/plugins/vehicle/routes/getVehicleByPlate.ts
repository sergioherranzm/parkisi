import { FastifyPluginAsync } from 'fastify';
import { VehicleModel } from '../model/VehicleModel';

export const getVhicleByPlate: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { vehiclePlate: string } }>(
    '/plate/:vehiclePlate',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { vehiclePlate } = request.params;
      const vehicle = await VehicleModel.findOne({
        plate: vehiclePlate,
      }).lean();

      return vehicle;
    }
  );
};
