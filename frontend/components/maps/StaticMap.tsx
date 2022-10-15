import { StaticGoogleMap, Marker, Path } from 'react-static-google-map';
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
  const { size = '600x600', zoom, markers } = props;

  return (
    <StaticGoogleMap size={size} zoom={zoom} apiKey={GOOGLE_API_KEY}>
      {markers &&
        markers.map((marker) => (
          <Marker
            key={marker.label}
            location={{
              lng: marker.coordinates[0],
              lat: marker.coordinates[1],
            }}
            color={marker.color}
            label={marker.label}
          />
        ))}
    </StaticGoogleMap>
  );
};

/*
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
  const { size = '600x600', zoom, markers } = props;

  console.log(markers);

  return (
    <StaticGoogleMap size={size} zoom={zoom} apiKey={GOOGLE_API_KEY}>
      {markers &&
        markers.map((marker) => (
          <Marker
            key={marker.label}
            location={{
              lat: marker.coordinates[0],
              lng: marker.coordinates[1],
            }}
            color={marker.color}
            label={marker.label}
          />
        ))}
    </StaticGoogleMap>
  );
};

---------------------------------------------


    <StaticGoogleMap
      size="600x600"
      className="img-fluid"
      apiKey={GOOGLE_API_KEY}
    >
      <Marker location="6.4488387,3.5496361" color="red" label="1" />
    </StaticGoogleMap>
  
  <StaticGoogleMap size="600x600" apiKey="YOUR_API_KEY">
    <Marker.Group label="T" color="brown">
      <Marker location="40.737102,-73.990318" />
      <Marker location="40.749825,-73.987963" />
    </Marker.Group>
  </StaticGoogleMap>
  
  <StaticGoogleMap size="600x600" apiKey="YOUR_API_KEY">
    <Marker
      location={{ lat: 40.737102, lng: -73.990318 }}
      color="blue"
      label="P"
    />
    <Path
      points={[
        '40.737102,-73.990318',
        '40.749825,-73.987963',
        '40.752946,-73.987384',
        '40.755823,-73.986397',
      ]}
    />
  </StaticGoogleMap>
  */
