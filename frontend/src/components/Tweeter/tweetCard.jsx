import React, { useEffect, useState } from "react";
import axios from "axios";

const TweetCard = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/tweet/tweets"
        );
        setTweets(response.data); // Assuming the response returns an array of tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };
    fetchTweets();
  }, []);

  return (
    <div className="container mx-auto mt-8 text-black">
      <h1 className="text-2xl font-bold text-center mb-4">Tweets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tweets.map((tweet) => (
          <div key={tweet._id} className="card bg-white w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">
                {tweet.userid ? tweet.userid : "Unknown tweeter user"}
              </h2>
              <p>{tweet.text}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Tweet</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetCard;
