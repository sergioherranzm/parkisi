import { NextApiHandler } from 'next';
import { GOOGLE_API_KEY } from '../../../lib/config';
import Geocode from 'react-geocode';

const api_route: NextApiHandler = async (req, res) => {
  const { lat, lng } = req.query;

  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey(GOOGLE_API_KEY);

  // set response language. Defaults to english.
  Geocode.setLanguage('en');

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion('es');

  // set location_type filter . Its optional.
  // google geocoder returns more that one address for given lat/lng.
  // In some case we need one address as response for which google itself provides a location_type filter.
  // So we can easily parse the result for fetching address components
  // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
  // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
  Geocode.setLocationType('ROOFTOP');

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();

  // Get latitude & longitude from address.
  Geocode.fromLatLng(lat, lng).then(
    (response) => {
      const address = response.results[0].formatted_address;
      let street, city, state, country, postal;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case 'route':
              street = response.results[0].address_components[i].long_name;
              break;
            case 'locality':
              city = response.results[0].address_components[i].long_name;
              break;
            case 'administrative_area_level_1':
              state = response.results[0].address_components[i].long_name;
              break;
            case 'country':
              country = response.results[0].address_components[i].long_name;
              break;
            case 'postal_code':
              postal = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
      res.json({ address, street, postal, city, state, country });
    },
    (error) => {
      console.error(error);
    }
  );
};

export default api_route;
