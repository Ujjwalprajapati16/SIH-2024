import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "../components/Disaster/MapComponent";
import DisasterList from "../components/Disaster/DisasterList";
import Cards from "../components/Disaster/DisasterCard";
import DisasterChart from "../components/Disaster/DisasterChart";

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
    return (
      <div className="text-center mt-20 text-xl">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="dashboard container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Disaster Dashboard
      </h1>

      {/* Cards Section */}
      <div className="mb-8">
        <Cards />
      </div>

      {/* Map and Chart side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Disaster Map */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-center mb-4">Disaster Map</h2>
          <MapComponent disasters={disasters} /> {/* Pass fetched data */}
        </div>

        {/* Disaster Chart */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-center mb-4 w-full">
            Disaster Chart
          </h2>
          <DisasterChart /> {/* Render chart */}
        </div>
      </div>

      {/* Disaster List */}
      <div className="disaster-list">
        <DisasterList disasters={disasters} />{" "}
        {/* Pass the fetched disasters */}
      </div>
    </div>
  );
};

export default Dashboard;
