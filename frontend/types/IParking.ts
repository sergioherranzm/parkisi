export interface IParking {
  street?: string;
  streetNumber?: string;
  postalCode?: string;
  city?: string;
  province?: string;
  location?: { type: 'Point'; coordinates: [number, number] }; //GeoJSON
  description?: string;
  image?: string;
  owner?: Object;
}
