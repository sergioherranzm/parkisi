import { FastifyPluginAsync } from 'fastify';
import { VehicleModel } from '../model/VehicleModel';

export const getVhicleById: FastifyPluginAsync = async (app) => {
  app.get<{ Params: { vehicleId: string } }>(
    '/detail/:vehicleId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { vehicleId } = request.params;
      const vehicle = await VehicleModel.findById(vehicleId).lean();

      return vehicle;
    }
  );
};
