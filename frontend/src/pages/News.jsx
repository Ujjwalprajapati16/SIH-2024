import React from "react";
import NewsCard from "../components/News/NewsCard.jsx";
import NewsArticles from "../json/NewsArticles.js";

const NewsPage = () => {

  return (
    <div className="min-h-screen flex flex-col">

      {/* News Section */}
      <section className="container mx-auto py-12 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NewsArticles.map((article, index) => (
            <NewsCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              sourceUrl={article.sourceUrl}
              date={article.date}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default NewsPage;
