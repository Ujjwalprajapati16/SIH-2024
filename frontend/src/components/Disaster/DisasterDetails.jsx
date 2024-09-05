import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DisasterDetail = () => {
  const { id } = useParams(); // Get the disaster ID from URL parameters
  const [disaster, setDisaster] = useState(null); // State for disaster data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch disaster data from the API based on the ID
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/disaster/disasters/${id}`)
      .then((response) => {
        setDisaster(response.data); // Set the fetched data
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        setError("Error fetching disaster details. Please try again later."); // Set error message
        setLoading(false); // Stop loading if error occurs
        console.error("Error fetching disaster details:", error); // Log the error for debugging
      });
  }, [id]);

  // Loading state UI
  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  // Error state UI
  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  // Disaster detail view
  return (
    <div className="disaster-detail container mx-auto px-4 py-8">
      {/* Title of the disaster */}
      <h2 className="text-4xl font-bold mb-6 text-center">{disaster.Title}</h2>

      {/* Disaster information */}
      <p className="text-lg text-gray-700 mb-4">{disaster.Disaster_Info}</p>

      {/* Details section */}
      <div className="details bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Details</h3>
        <p>
          <strong>Date:</strong> {disaster.Date}
        </p>
        <p>
          <strong>Year:</strong> {disaster.Year}
        </p>
        <p>
          <strong>Duration:</strong> {disaster.Duration}
        </p>
      </div>
    </div>
  );
};

export default DisasterDetail;
