import mongoose from 'mongoose';
import { DB_URL } from './config';
import { ParkingModel } from './plugins/parking/model/ParkingModel';
import { ReserveModel } from './plugins/reserve/model/ReserveModel';
import { SlotModel } from './plugins/slot/model/SlotModel';
import { UserProfileModel } from './plugins/userProfile/model/UserProfileModel';
import { VehicleModel } from './plugins/vehicle/model/VehicleModel';

(async () => {
  await mongoose.connect(DB_URL);
  console.log(`✅ Database connection successfull`);

  const seedProfile = await UserProfileModel.findOne({
    auth0_id: 'auth0|634011cf659a825486a1ff6e',
  });

  // Drop collections
  /*
  try {
    //await UserProfileModel.collection.drop();
  } catch (error) {
    console.log('No user profile to drop');
  }
  */
  /*
  try {
    await VehicleModel.collection.drop();
  } catch (error) {
    console.log('No vehicle to drop');
  }
*/

  try {
    await ParkingModel.collection.drop();
  } catch (error) {
    console.log('No parking to drop');
  }

  try {
    await SlotModel.collection.drop();
  } catch (error) {
    console.log('No slot to drop');
  }
  try {
    await ReserveModel.collection.drop();
  } catch (error) {
    console.log('No reserve to drop');
  }

  // Create PROFILES
  /*
  const userprofile1 = await UserProfileModel.create({
    auth0_id: 'auth0|634011cf659a825486a1ff6e',
    nickname: 'seed_user',
    email: 'seed@seed.com',
  });
  */

  // Create PARKINGS
  const parking1 = await ParkingModel.create({
    address: 'address_seed',
    postalCode: 'seed_code',
    location: { type: 'Point', coordinates: [-3.7003632, 40.4765501] },
    description: 'Loren ipsum description',
    image:
      'https://i.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE',
    owner: seedProfile?._id,
  });

  // Create SLOT
  const slot1 = await SlotModel.create({
    identification: 'idSeed_slot',
    size: 1,
    difficulty: 'easy',
    availability: [],
    price: 9,
    parking: parking1._id,
  });

  // Create VEHICLES
  const vehicle1 = await VehicleModel.create({
    type: 'car',
    size: 3,
    plate: 'XXXXYYY',
    model: 'model_seed',
    owner: seedProfile?._id,
  });

  // Create RESERVE
  const reserve1 = await ReserveModel.create({
    period: ['22/10/2022', '23/10/2022', '24/10/2022', '25/10/2022'],
    slot: slot1._id,
    owner: seedProfile?._id,
    vehicle: vehicle1._id,
  });

  await mongoose.disconnect();
  console.log('❎ Database connection CLOSED');
})();
