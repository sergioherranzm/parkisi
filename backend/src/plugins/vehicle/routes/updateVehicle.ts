import { FastifyPluginAsync } from 'fastify';
import { VehicleModel } from '../model/VehicleModel';

export const updateVehicle: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: string;
    Params: { vehicleId: string };
  }>('/detail/:vehicleId', async (request, reply) => {
    const { vehicleId } = request.params;
    const userProfile = await VehicleModel.findByIdAndUpdate(
      vehicleId,
      JSON.parse(request.body)
    );

    //console.log('UPDATED vehicle:', JSON.parse(request.body));

    return { updatedVehicle: vehicleId };
  });
};
