'use client';
import React, { useState } from "react";
import casesData from "../../data/casesData";

const Cases = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCases = showAll ? casesData : casesData.slice(0, 3);

  return (
    <section id="cases" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Dental Cases</h2>
        <p className="text-lg text-center mb-10">
          Explore some of my dental cases.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              {caseItem.before && caseItem.after ? (
                <div className="flex justify-center space-x-6">
                  <div>
                    <img
                      src={caseItem.before}
                      alt="Before"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-gray-500 mt-2 text-sm">Before</p>
                  </div>
                  <div>
                    <img
                      src={caseItem.after}
                      alt="After"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-gray-500 mt-2 text-sm">After</p>
                  </div>
                </div>
              ) : (
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
              <p className="text-gray-600">{caseItem.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-blue-400 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            {showAll ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;