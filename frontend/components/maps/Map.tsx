import { GOOGLE_API_KEY } from '../../lib/config';
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdLocationPin } from 'react-icons/md';
import PropTypes from 'prop-types';

const Marker = ({
  lat,
  lng,
  color,
  label,
  size,
  $hover,
  isSelected,
  changeCardSelection,
}) => {
  if ((isSelected || $hover) && label !== '') {
    size = 60;
  }
  return (
    <>
      {label === '' && (
        <div
          tw="relative z-10"
          onMouseEnter={() => {
            changeCardSelection('');
          }}
          onMouseLeave={() => {
            changeCardSelection('');
          }}
        >
          <MdLocationPin
            color={color}
            fontSize={size}
            style={{ margin: '-41px -22px' }}
          />
        </div>
      )}
      {label !== '' && (
        <div
          tw="relative cursor-pointer"
          onMouseEnter={() => {
            changeCardSelection(label);
          }}
          onMouseLeave={() => {
            changeCardSelection('');
          }}
        >
          {!isSelected && !$hover && (
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
      )}
    </>
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

const Map = ({
  center,
  initialCoords,
  markers,
  cardSel,
  changeCardSelection,
}) => {
  const [cardData, setCardData] = useState(null);
  const [cordinates, setCordinates] = useState(initialCoords);
  const [selectedCard, setSelectedCard] = useState('');

  useEffect(() => {
    setCordinates(center);
  }, [center]);

  useEffect(() => {
    setSelectedCard(cardSel);
  }, [cardSel]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
      defaultCenter={initialCoords}
      center={cordinates}
      defaultZoom={13}
      onChildMouseEnter={(child) => {
        setSelectedCard(markers[child].label);
      }}
      onChildClick={(child) => {
        setCardData(markers[child]);
      }}
      onMouseLeave={() => {
        changeCardSelection('');
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
            isSelected={selectedCard === marker.label}
            changeCardSelection={changeCardSelection}
          />
        );
      })}
    </GoogleMapReact>
  );
};

export default Map;

Map.propTypes = {
  coordenadas: PropTypes.object,
  gasolineras: PropTypes.array,
};
