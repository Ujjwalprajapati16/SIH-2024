import React from "react";

const Cards = () => {
  const cardData = [
    { title: "Total cases", number: "300000", percentage: "29% high" },
    { title: "Total cases", number: "300000", percentage: "29% high" },
    { title: "Total cases", number: "300000", percentage: "29% high" },
    { title: "Total cases", number: "300000", percentage: "29% high" },
    { title: "Total cases", number: "300000", percentage: "29% high" },
    { title: "Total cases", number: "300000", percentage: "29% high" },
  ];

  return (
    <section className="flex flex-wrap gap-8 justify-center">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="card bg-green-200 text-black w-80 shadow-xl rounded-lg"
        >
          <div className="card-body p-6">
            <h1 className="card-title text-2xl font-bold mb-4">{card.title}</h1>
            <span className="text-5xl font-bold">{card.number}</span>
            <div className="card-actions mt-4">
              <span className="text-lg font-medium">{card.percentage}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;
