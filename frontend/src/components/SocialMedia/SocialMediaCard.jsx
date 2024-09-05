import React from "react";

const SocialMediaCard = ({ platform, content, imageUrl, link }) => {
  // Define styles based on the platform
  const styles = {
    twitter: "bg-blue-500 text-white",
    facebook: "bg-blue-800 text-white",
    instagram: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white"
  };

  return (
    <div className={`rounded-lg p-6 shadow-lg ${styles[platform]} hover:shadow-2xl transition-shadow`}>
      <img src={imageUrl} alt={`${platform} icon`} className="w-12 h-12 mb-4" />
      <h2 className="text-xl font-bold capitalize">{platform}</h2>
      <p className="mt-2">{content}</p>
      <a href={link} className="mt-4 inline-block text-white underline">
        View on {platform}
      </a>
    </div>
  );
};

export default SocialMediaCard;
