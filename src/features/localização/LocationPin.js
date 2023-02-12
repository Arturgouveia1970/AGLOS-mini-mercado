import React from 'react';
import locationIcon from '@icons-mdi/map-marker';

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);
export default LocationPin;
