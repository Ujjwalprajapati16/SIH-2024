import React from "react";
import { Link } from "react-router-dom";

const DisasterList = ({ disasters }) => (
  <div className="disaster-list container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-6 text-center">Disasters</h2>
    <ul className="space-y-4">
      {disasters.map((disaster) => (
        <li
          key={disaster.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Link
            to={`/disaster/${disaster.id}`}
            className="text-lg font-semibold text-blue-600 hover:text-blue-800"
          >
            {disaster.name}
          </Link>
          <p className="text-gray-600 mt-2">{disaster.shortDescription}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default DisasterList;
