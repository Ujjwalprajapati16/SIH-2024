import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisasterList from './DisasterList';
import MapComponent from './MapComponent';
import './Dashboard.css';

const Dashboard = () => {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('https://api.example.com/disasters')
      .then(response => {
        setDisasters(response.data);
      })
      .catch(error => {
        console.error('Error fetching disaster data:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <MapComponent disasters={disasters} />
      <DisasterList disasters={disasters} />
    </div>
  );
};

export default Dashboard;
