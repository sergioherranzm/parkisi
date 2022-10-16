import { NextApiHandler } from 'next';
import { GOOGLE_API_KEY } from '../../../lib/config';
import Geocode from 'react-geocode';

const api_route: NextApiHandler = async (req, res) => {
  const { address } = req.query;

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
  Geocode.enableDebug(false);

  // Get latitude & longitude from address.

  Geocode.fromAddress(address).then(
    (response) => {
      const { lng, lat } = response.results[0].geometry.location;
      res.json({ lng, lat });
    },
    (error) => {
      console.error('ERROR retrieving coordinates from address:', error);
      res.json({ error: error.toString() });
    }
  );
};

export default api_route;
