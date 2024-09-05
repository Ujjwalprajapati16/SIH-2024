import React from "react";
import { Link } from "react-router-dom";

const DisasterList = ({ disasters }) => {
  // Sort disasters by date in descending order (most recent first)
  const sortedDisasters = disasters.slice().sort((a, b) => new Date(b.year) - new Date(a.year));

  return (
    <div className="disaster-list container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Disaster History</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {sortedDisasters.map((disaster) => (
          <div
            key={disaster._id} // Assuming _id is the identifier from MongoDB
            className="card bg-white text-black shadow-lg hover:shadow-lg transition-shadow rounded-lg"
          >
            <div className="card-body p-4">
              <h2 className="card-title text-xl font-semibold mb-2">
                <Link
                  to={`/disaster/${disaster._id}`} // Adjust the route to use _id
                  className="text-blue-600 hover:text-blue-800"
                >
                  {disaster.title} {/* Displaying the title */}
                </Link>
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>{disaster.duration}</strong>
              </p>

              <p className="text-gray-700 mb-4">
                {disaster.disaster_info.substring(0, 100)}...{" "}
                {/* Shortened disaster info */}
              </p>
              <div className="card-actions flex justify-end">
                <Link to={`/disaster/${disaster._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisasterList;
