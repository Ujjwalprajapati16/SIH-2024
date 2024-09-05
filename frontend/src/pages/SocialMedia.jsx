// src/pages/SocialMediaPage.jsx
import React from "react";
import SocialMediaCard from "../components/SocialMedia/SocialMediaCard";

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Social Media Updates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SocialMediaCard
            platform="twitter"
            content="Real-time updates from Twitter about the latest disasters."
            imageUrl="https://abs.twimg.com/icons/apple-touch-icon-192x192.png"
            link="https://twitter.com"
          />

          <SocialMediaCard
            platform="facebook"
            content="Stay informed with the latest news and discussions from Facebook."
            imageUrl="https://www.facebook.com/images/fb_icon_325x325.png"
            link="https://facebook.com"
          />

          <SocialMediaCard
            platform="instagram"
            content="Check out the latest images and stories from Instagram."
            imageUrl="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
            link="https://instagram.com"
          />
        </div>
      </main>

    </div>
  );
};

export default SocialMediaPage;
