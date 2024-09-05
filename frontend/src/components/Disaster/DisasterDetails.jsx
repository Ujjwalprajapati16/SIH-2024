import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DisasterDetail = () => {
  const { id } = useParams();
  const [disaster, setDisaster] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/disasters/${id}`)
      .then(response => {
        setDisaster(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching disaster details. Please try again later.');
        setLoading(false);
        console.error('Error fetching disaster details:', error);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="disaster-detail container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-center">{disaster.name}</h2>
      <p className="text-lg text-gray-700 mb-4">{disaster.description}</p>
      {/* Add more details as needed, e.g., location, date, impact */}
      <div className="details bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Details</h3>
        <p><strong>Date:</strong> {disaster.date}</p>
        <p><strong>Location:</strong> {disaster.location}</p>
        <p><strong>Impact:</strong> {disaster.impact}</p>
        {/* Add any other relevant information */}
      </div>
    </div>
  );
};

export default DisasterDetail;
