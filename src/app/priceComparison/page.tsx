"use client";

import React from "react";

const PriceComparison: React.FC = () => {
  const prices = {
    UK: ["£25", "£30", "£40", "£35"],
    USA: ["$40", "$50", "$65", "$60"],
    Australia: ["$55", "$65", "$85", "$70"],
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Price Comparison</h1>
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 ">Country</th>
              <th className="py-2 px-4 border-b border-gray-200">Price 1</th>
              <th className="py-2 px-4 border-b border-gray-200">Price 2</th>
              <th className="py-2 px-4 border-b border-gray-200">Price 3</th>
              <th className="py-2 px-4 border-b border-gray-200">Price 4</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(prices).map((country) => (
              <tr key={country}>
                <td className="py-2 px-4 border-b border-gray-200  text-center">
                  {country}
                </td>
                {prices[country as keyof typeof prices].map((price, index) => (
                  <td
                    key={index}
                    className="py-2 px-4 border-b border-gray-200 text-center"
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceComparison;
