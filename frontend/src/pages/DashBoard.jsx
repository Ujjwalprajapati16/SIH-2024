import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "../components/Disaster/MapComponent";
import DisasterList from "../components/Disaster/DisasterList";

const Dashboard = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/disaster/disasters")
      .then((response) => {
        setDisasters(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching disaster data. Please try again later.");
        setLoading(false);
        console.error("Error fetching disaster data:", error);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-xl"><span className="loading loading-infinity loading-lg"></span></div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="dashboard container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Disaster Dashboard
      </h1>

      {/* First, display the map */}
      <div className="mb-8">
        <MapComponent disasters={disasters} />{" "}
        {/* Pass the fetched disasters to MapComponent */}
      </div>

      {/* Next, display the disaster list */}
      <div className="disaster-list">
        <DisasterList disasters={disasters} />{" "}
        {/* Pass the fetched disasters to DisasterList */}
      </div>
    </div>
  );
};

export default Dashboard;
