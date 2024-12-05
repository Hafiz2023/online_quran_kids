"use clint";
import React from "react";
import PriceComparison from "../priceComparison/page";

const ServicePackages: React.FC = () => {
  const packages = [
    {
      title: "Package 1",
      daysPerWeek: "2 Days / Week",
      classesPerMonth: "8 Classes / Month",
      price: "£25 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 2",
      daysPerWeek: "3 Days / Week",
      classesPerMonth: "12 Classes / Month",
      price: "£30 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 3",
      daysPerWeek: "5 Days / Week",
      classesPerMonth: "20 Classes / Month",
      price: "£40 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: true,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "£35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "$35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "$35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "$35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "$35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "£35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "£35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "£35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
    {
      title: "Package 4",
      daysPerWeek: "Weekend Classes",
      classesPerMonth: "8 Classes / Month",
      price: "£35 Monthly",
      features: [
        "30 Min / Day",
        "Quran Reading",
        "Namaz / Salah",
        "Duas & Kalmas",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`border rounded-lg p-6 ${
              pkg.isPopular ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
            <p className="mb-1">{pkg.daysPerWeek}</p>
            <p className="mb-1">{pkg.classesPerMonth}</p>
            <p className="text-xl font-semibold mb-4">{pkg.price}</p>
            <ul className="mb-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="list-disc list-inside">
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              Order Now
            </button>
          </div>
        ))}
      </div>
      <PriceComparison />
    </div>
  );
};

export default ServicePackages;
