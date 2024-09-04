import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapComponent.css';

const MapComponent = ({ disasters }) => (
  <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '500px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {disasters.map(disaster => (
      <Marker key={disaster.id} position={[disaster.latitude, disaster.longitude]}>
        <Popup>
          {disaster.name}<br />{disaster.description}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default MapComponent;
