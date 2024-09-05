import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapComponent = ({ disasters }) => (
  <div className="map-container" style={{ marginBottom: "2rem" }}>
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={4}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {disasters.map((disaster) => (
        <Marker
          key={disaster.id}
          position={[disaster.latitude, disaster.longitude]}
        >
          <Popup>
            <div className="popup-content">
              <h3 className="font-bold">{disaster.name}</h3>
              <p>{disaster.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);

export default MapComponent;
