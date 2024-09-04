import React from "react";

const NewsCard = ({ title, description, imageUrl, sourceUrl, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <a
            href={sourceUrl}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
