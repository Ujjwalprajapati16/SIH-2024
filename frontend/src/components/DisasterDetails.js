import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DisasterDetail.css';

const DisasterDetail = () => {
  const { id } = useParams();
  const [disaster, setDisaster] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get(`https://api.example.com/disasters/${id}`)
      .then(response => {
        setDisaster(response.data);
      })
      .catch(error => {
        console.error('Error fetching disaster details:', error);
      });
  }, [id]);

  if (!disaster) return <div>Loading...</div>;

  return (
    <div className="disaster-detail">
      <h2>{disaster.name}</h2>
      <p>{disaster.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DisasterDetail;
