import React from 'react';
import { Link } from 'react-router-dom';
import './DisasterList.css';

const DisasterList = ({ disasters }) => (
  <div className="disaster-list">
    <h2>Disasters</h2>
    <ul>
      {disasters.map(disaster => (
        <li key={disaster.id}>
          <Link to={`/disaster/${disaster.id}`}>
            {disaster.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default DisasterList;
