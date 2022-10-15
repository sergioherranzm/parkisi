import { FastifyPluginAsync } from 'fastify';
import { VehicleModel } from '../model/VehicleModel';

export const deleteVehicleById: FastifyPluginAsync = async (app) => {
  app.delete<{ Params: { vehicleId: string } }>(
    '/detail/:vehicleId',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const { vehicleId } = request.params;

      const vehicle = await VehicleModel.findByIdAndDelete(vehicleId);

      return { message: `Vehicle ${vehicleId} delete request OK` };
    }
  );
};
