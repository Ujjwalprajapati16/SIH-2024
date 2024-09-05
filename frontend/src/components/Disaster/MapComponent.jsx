import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Ensure Leaflet CSS is imported

const MapComponent = ({ disasters }) => (
  <div className="map-section p-4" style={{ marginBottom: "2rem" }}>
    <div className="map-container h-96 w-full overflow-hidden">
      <MapContainer
        center={[20.5937, 78.9629]} // Adjust based on your map's default center
        zoom={4}
        style={{ height: "100%", width: "100%" }} // Full height and width of the parent container
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {disasters.map((disaster) => {
          // Check if both latitude and longitude are defined
          if (disaster.latitude && disaster.longitude) {
            return (
              <Marker
                key={disaster._id} // Adjust if your disaster object uses a different ID field
                position={[disaster.latitude, disaster.longitude]} // Use valid lat/lng
              >
                <Popup>
                  <div className="popup-content">
                    <h3 className="font-bold">{disaster.title}</h3>
                    <p>{disaster.disaster_info}</p>
                  </div>
                </Popup>
              </Marker>
            );
          } else {
            // Optionally log an error or return null for disasters without valid coordinates
            console.warn(
              `Invalid coordinates for disaster ID: ${disaster._id}`
            );
            return null;
          }
        })}
      </MapContainer>
    </div>
  </div>
);

export default MapComponent;
