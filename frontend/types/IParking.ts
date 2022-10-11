export interface IParking {
  address?: string;
  postalCode?: string;
  city?: string;
  province?: string;
  location?: { type: 'Point'; coordinates: [number, number] }; //GeoJSON
  description?: string;
  owner?: Object;
}
