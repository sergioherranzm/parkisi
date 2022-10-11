import { FastifyPluginAsync } from 'fastify';
import { ParkingModel } from '../model/ParkingModel';

export const getParkingsCloseToAddress: FastifyPluginAsync = async (app) => {
  app.get<{
    Querystring: { lat: string; lng: string; limit?: string; maxKm?: string };
  }>(
    '/address',
    { preValidation: app.authenticate },
    async (request, reply) => {
      const lng: number = parseFloat(request.query.lng);
      const lat: number = parseFloat(request.query.lat);
      const limit: number = request.query.limit
        ? parseInt(request.query.limit, 10)
        : 100;
      const maxKm: number = request.query.maxKm
        ? parseInt(request.query.maxKm, 10)
        : 50;

      /*
      const listParking = await ParkingModel.find({})
        .limit(limit)
        .populate('slots')
        .lean();
*/

      const listParking = await ParkingModel.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [lng, lat],
            },
            $maxDistance: maxKm * 1000,
          },
        },
      })
        .limit(limit)
        .populate('slots')
        .lean();

      //console.log(listParking);

      return listParking;
    }
  );
};
