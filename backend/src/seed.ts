import mongoose from 'mongoose';
import { DB_URL } from './config';
import { CategoryModel } from './plugins/userProfile/models/UserProfileModel';
import { PostModel } from './plugins/parkings/model/ParkingModel';

const createPost = (
  title: string,
  text: string,
  associatedCategory: string,
  catName: string
) => {
  return {
    title,
    text,
    img: `https://source.unsplash.com/random/?${catName}`,
    associatedCategory,
  };
};

(async () => {
  await mongoose.connect(DB_URL);
  console.log(`✅ Database connection successfull`);

  // Drop collections
  try {
    await CategoryModel.collection.drop();
  } catch (error) {
    console.log('No category to drop');
  }

  try {
    await PostModel.collection.drop();
  } catch (error) {
    console.log('No post to drop');
  }

  // Create CATEGORIES
  const category1 = await CategoryModel.create({
    name: 'Militaryaviation',
    title: 'Military aviation',
    description: 'Everything about military aviation: bombers, fighters...',
  });

  const category2 = await CategoryModel.create({
    name: 'Airplane',
    title: 'Commercial aviation',
    description: 'Everything about commercial aviation: airbus, boeing...',
  });

  const category3 = await CategoryModel.create({
    name: 'Generalaviation',
    title: 'General aviation',
    description: 'Everything about general aviation: cessna, gliders...',
  });

  const category4 = await CategoryModel.create({
    name: 'Cars',
    title: 'Cars',
    description: 'Everything about cars',
  });

  const category5 = await CategoryModel.create({
    name: 'Motorcycles',
    title: 'Motorcycles',
    description: 'Everything about motorbikes',
  });

  // Create POSTS
  await PostModel.create(
    createPost(
      'Ukrainian MiG-29s Are Hunting Russian Radars With AGM-88 HARM Missiles',
      'The United States announced another security assistance package to support Ukraine, worth $775 million. During the briefing with the press on August 19, 2022, to discuss the contents of the package, which is again a presidential drawdown package (the 19th since August 2021), the officials confirmed that the U.S. delivered AGM-88 High Speed Anti Radiation missiles to Ukraine and that these are being employed by the MiG-29 Fulcrum.\nAs you may know already, on August 8, U.S. officials said they were assisting the Ukrainian Air Force staying in the air and improving its capabilities. Something that was already done several months ago was the procurement of “sheer amounts of spare parts and other things” to keep the MiG-29s flying for a longer period of time, according to the briefing’s transcript.',
      category1._id,
      category1.name
    )
  );
  await PostModel.create(
    createPost(
      'U.S. Air Force Releases Photos Of Mock B61-12 Nuclear Bomb Test Loaded On B-2A Bomber',
      'The U.S. Air Force recently released on the Defense Visual Information Distribution Service (DVIDS) website a series of interesting photos from Whiteman Air Force Base, Missouri. The photos, taken on June 13, 2022, show a high-fidelity, non-nuclear mock B61-12 Joint Test Assembly (JTA) being prepared for test loading inside the B-2A Spirit stealth bomber’s bombs bay. To our knowledge, these should be the first public photos of the weapon with the Spirit since testing aboard the aircraft has begun few years ago.\nThe Air Force did not provide many details and did not even mention the name of the bomb, simply stating “the 72nd Test and Evaluation Squadron test loads a new nuclear-capable weapons delivery system for the B-2 Spirit bomber”. The 72nd TES, a geographically separated unit of Eglin AFB’s 53rd Wing based at Whiteman, is in charge of all testing and evaluation of new equipment, software and weapons systems for the B-2 Spirit stealth bomber.”',
      category1._id,
      category1.name
    )
  );
  await PostModel.create(
    createPost(
      'Emirates To Upgrade Interiors of 120 Aircraft As Airline Expands Fleet',
      'Emirates recently announced that it is undertaking its largest fleet retrofit project ever, involving 67 Airbus A380s and 53 Boeing 777s. This project is part of a multibillion-dollar investment that Emirates is making as a part of the “Fly Better” campaign that began in November 2018.',
      category2._id,
      category2.name
    )
  );
  await PostModel.create(
    createPost(
      'Hainan Airlines Resumes Flights to Manchester, U.K.',
      'The U.K ‘s Manchester Airport has expanded its route map to mainland China again, after a two-year hiatus. The Chinese government has approved an agreement with the U.K. government to renew flights between Manchester, U.K. and China. As a result, Hainan Airlines will resume its Beijing to Manchester, U.K., operating a weekly service between the two cities.',
      category2._id,
      category2.name
    )
  );
  await PostModel.create(
    createPost(
      'New runway opens at 21D',
      'A new 3,500-foot runway is now open at Lake Elmo Airport (21D) in St. Paul, Minnesota. The new runway is part of a multi-year project to improve airfield infrastructure and provide safer operations, according to officials with the Metropolitan Airports Commission. Runway 14-32, which opened to traffic July 20, 2022, is 650 feet longer than the previous runway, which will be converted to a taxiway in the final phase of the project, airport officials said. Located between St. Paul and the St. Croix River, the Lake Elmo Airport is a hub for recreational aircraft, business aviation, and flight training. The airport supports more than 32,000 landings and takeoffs annually.',
      category3._id,
      category3.name
    )
  );
  await PostModel.create(
    createPost(
      'Buying a Used Truck? These 5 Rule the Worksite',
      'The best used trucks have come a long way from the days of basic bench seats and vinyl upholstery. Modern trucks are more powerful and more capable than ever, but they are also more comfortable, as automakers have responded to the changing demands of truck owners.',
      category4._id,
      category4.name
    )
  );
  await PostModel.create(
    createPost(
      'The Jaguar F-PACE SVR: A Modern-Day Supercar',
      'Let’s be perfectly clear: The 380-horsepower Jaguar F-PACE S has always been a fast SUV. Its supercharged V6 roars to life and will make the uninitiated’s hair stand on end. On this point, there is little argument.',
      category4._id,
      category4.name
    )
  );
  await PostModel.create(
    createPost(
      'Yamaha Announces New 2023 YZ450F, YZ125X, And YZ250X',
      'Yamaha Motor Corporation, USA, is excited to introduce the new 2023 lineup of advanced, industry-leading YZ off-road motorcycles. Conceived for competition and extensively developed through knowledge gained at the highest levels of professional motorsports, the 2023 lineup of Yamaha YZ Motocross and Cross Country machines offer cutting-edge performance along with a level of refinement and rideability that instills confidence in every rider. Highlights for 2023 include an all-new flagship YZ450F Motocross model, along with an all-new YZ125X and extensively updated YZ250X two-stroke Cross Country models.',
      category5._id,
      category5.name
    )
  );
  await PostModel.create(
    createPost(
      'VinFast EScooters Coming To America',
      'Electrek reported a couple of weeks ago about a new electric scooter company coming to America. What’s different about VinFast is that it’s not just importing scooters to the US, it’s also importing a factory: The North Carolina facility, Electrek reports, is expected to break ground later this year, with production supposed to begin in 2024. The skids have reportedly been greased with a $1.2-billion incentive package from the state. There’s no need to get upset about US tax funds going to China, though, as VinFast is headquartered in Hanoi City, Vietnam.',
      category5._id,
      category5.name
    )
  );

  await mongoose.disconnect();
  console.log('DB CLOSED');
})();
