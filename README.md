<p align="center">
  <a href="https://camo.githubusercontent.com/">
    <img src="https://camo.githubusercontent.com/42f5986dec98935a91e5ba9ff7dd1e4999472746e5771c74136abfa5b0e006c9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6578742e6a732532302d2532333030303030302e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465" alt="nextjs">
  </a>
  <a href="https://github.com/ellerbrock/typescript-badges">
    <img src="https://badges.frapsoft.com/typescript/code/typescript.svg?v=101" alt="typescript">
  </a>
</p>

<p align="center">
 <img width=200px height=200px src="./frontend/public/favicon.png" alt="logo"></a>
</p>

# Parkisi

_The app to find parking easy_

### You can try it [here](https://parkisi.vercel.app/)

<!-- A spacer -->
<p>&nbsp;</p>

<div align="center">

</div>

---

## Table of Contents

- [About](#about)
- [API](#api)
- [Tools used](#tools)
- [Future developments](#future)
- [Acknowledgments](#acknowledgement)

## About <a name = "about"></a>

This webapp allows private parking owners to offer their parking lots to other users, who can find, reserve and pay a parking slot all around the globe.

Register an user, insert a location, insert the date, find the parking that fits your needs best, reserve an slot, and pay for it.

## Data Models <a name="models"></a>

```js
- userProfile
    auth0_id: string;
    nickname: string;
    name?: string;
    surname?: string;
    email: string;
    phone?: number;
    description?: string;
- vehicle
    type: 'car' | 'motorbike' | 'other';
    size: 1 | 2 | 3; //'small' | 'medium' | 'large';
    plate: string;
    model: string;
    owner: UserProfileDocument['_id'];
- parking
    street: string;
    streetNumber?: string;
    postalCode?: string;
    city: string;
    province?: string;
    location: { type: 'Point'; coordinates: [number, number] }; //GeoJSON
    description: string;
    image: string;
    owner: UserProfileDocument['_id'];
- slot
    identification: string;
    size: 1 | 2 | 3; //'small' | 'medium' | 'large';
    difficulty: 'easy' | 'medium' | 'hard';
    price: number;
    parking: ParkingDocument['_id'];
- reserve
    period: string[];
    slot: SlotDocument['_id'];
    owner: UserProfileDocument['_id'];
    vehicle: VehicleDocument['_id'];
```

## API <a name="api"></a>

API endpoints:

    ['GET', '/'],
    ['GET', '/userProfile/list'],
    ['GET', '/userProfile/:auth0Id'],
    ['GET', '/userProfile/detail/:userId'],
    ['POST', '/userProfile/detail/:userId'],
    ['GET', '/parking/list/:auth0Id'],
    ['GET', '/parking/address?lat&lng&limit&maxKm'],
    ['GET', '/parking/detail/:parkingId'],
    ['DELETE', '/parking/detail/:parkingId'],
    ['POST', '/parking'],
    ['GET', '/slot/detail/:slotId'],
    ['DELETE', '/slot/detail/:slotId'],
    ['GET', '/slot/list/:parkingId'],
    ['DELETE', '/slot/list/:parkingId'],
    ['POST', '/slot'],
    ['GET', '/vehicle/list/:auth0Id'],
    ['GET', '/vehicle/plate/:vehiclePlate'],
    ['GET', '/vehicle/detail/:vehicleId'],
    ['POST', '/vehicle/detail/:vehicleId'],
    ['DELETE', '/vehicle/detail/:vehicleId'],
    ['POST', '/vehicle'],
    ['GET', '/reserve/list/user/:auth0Id'],
    ['GET', '/reserve/detail/:reserveId'],
    ['GET', '/reserve/list/slot/:slotId'],
    ['DELETE', '/reserve/list/slot/:slotId'],
    ['GET', '/reserve/list/parking/:parkingId'],
    ['DELETE', '/reserve/list/parking/:parkingId'],
    ['DELETE', '/reserve/detail/:reserveId'],
    ['POST', '/reserve'],

## Tools used <a name = "tools"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Fastify](https://www.fastify.io/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [React](https://es.reactjs.org/) - JavaScript library
- [NextJs](https://nextjs.org/) - React Framework
- [Nodemon](https://nodemon.io/) - Dev utility
- [Typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [ChartJs](https://www.chartjs.org/) - JavaScript charting
- [react-hook-forms](https://react-hook-form.com/) - Performant, flexible and extensible forms
- [tailwindcss](https://tailwindcss.com/) - CSS framework

## Future developments <a name="future"></a>

Due to the short time available for the development some functionalities have been cut and postponed for future developments:

- Filter for all list
- User deletion
- Enhacement of map navigation
- Design and art work

## Acknowledgements <a name = "acknowledgement"></a>

Thanks to the Core Code School Team for this amazing botcamp
[![Status](https://brand.corecode.school/logos/logo_core_wide.svg)](https://www.corecode.school/)
