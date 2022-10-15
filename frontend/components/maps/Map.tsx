import { GOOGLE_API_KEY } from '../../lib/config';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from 'react-icons/md';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const Marker = ({ lat, lng, color, label, size, $hover, isSelected }) => {
  if (isSelected || $hover) {
    size = 60;
  }
  return (
    <div tw="relative cursor-pointer">
      {!$hover && !isSelected && (
        <>
          <MdLocationPin
            color={color}
            fontSize={size}
            style={{ margin: '-27px -15px' }}
          />
          <div
            style={{ margin: '-57px -14px' }}
            tw="text-white font-bold text-xl text-center rounded-full w-7 bg-secondary-400"
          >
            {label}
          </div>
        </>
      )}
      {(isSelected || $hover) && (
        <>
          <MdLocationPin
            tw="text-primary-300"
            fontSize={size}
            style={{ margin: '-55px -30px' }}
          />
        </>
      )}
    </div>
  );
};

Marker.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  label: PropTypes.string,
  size: PropTypes.number,
  $hover: PropTypes.bool,
  isSelected: PropTypes.bool,
};

const Map = ({ center, initialCoords, markers, markerSel }) => {
  const [cardData, setCardData] = useState(null);
  const [cordinates, setCordinates] = useState(initialCoords);
  const [selectedMarker, setSelectedMarker] = useState('');

  useEffect(() => {
    setCordinates(center);
  }, [center]);

  useEffect(() => {
    setSelectedMarker(markerSel);
  }, [markerSel]);

  return (
    <div style={{ height: '700px', width: '50em' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={initialCoords}
        center={cordinates}
        defaultZoom={12}
        onChildMouseEnter={(child) => {
          setSelectedMarker(markers[child].label);
        }}
        onChildClick={(child) => {
          setCardData(markers[child]);
        }}
      >
        {markers.map((marker, i) => {
          return (
            <Marker
              key={i}
              lat={parseFloat(marker.coordinates[1])}
              lng={parseFloat(marker.coordinates[0])}
              label={marker.label}
              color={marker.color}
              size={marker.size}
              isSelected={selectedMarker === marker.label}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

Map.propTypes = {
  coordenadas: PropTypes.object,
  gasolineras: PropTypes.array,
};
