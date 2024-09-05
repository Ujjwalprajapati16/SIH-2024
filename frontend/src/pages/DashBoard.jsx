import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from '../components/Disaster/MapComponent';
import DisasterList from '../components/Disaster/DisasterList';

const Dashboard = () => {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.example.com/disasters')
      .then(response => {
        setDisasters(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching disaster data. Please try again later.');
        setLoading(false);
        console.error('Error fetching disaster data:', error);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  return (
    <div className="dashboard container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Disaster Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MapComponent disasters={disasters} />
        </div>
        <div className="lg:col-span-1">
          <DisasterList disasters={disasters} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
