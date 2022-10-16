import { StaticGoogleMap, Marker } from 'react-static-google-map';
import { GOOGLE_API_KEY } from '../../lib/config';

export const StaticMap = (props: {
  size: string;
  zoom?: number;
  markers?: {
    coordinates: [number, number];
    color:
      | number
      | 'black'
      | 'brown'
      | 'green'
      | 'purple'
      | 'yellow'
      | 'blue'
      | 'gray'
      | 'orange'
      | 'red'
      | 'white';
    label: string;
  }[];
}) => {
  const { size = '600x600', zoom = 17, markers } = props;

  return (
    <StaticGoogleMap size={size} zoom={zoom} apiKey={GOOGLE_API_KEY}>
      {markers &&
        markers.map((marker) => (
          <Marker
            key={marker.label}
            location={{
              lng: marker?.coordinates[0],
              lat: marker?.coordinates[1],
            }}
            color={marker?.color}
            label={marker?.label}
          />
        ))}
    </StaticGoogleMap>
  );
};
