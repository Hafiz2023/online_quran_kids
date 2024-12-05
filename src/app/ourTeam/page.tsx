"use client"; 
import React from "react";
import Image from "next/image";

const OurTeam: React.FC = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="text-2xl font-bold mb-3 text-green-600 text-center p-5">
            General Question
          </div>
          <p className="mb-6 text-justify max-w-xl mx-auto text-base leading-relaxed">
            At <span className="font-bold">Online Quran Kids</span>, our highly qualified teachers are dedicated to providing personalized, engaging lessons. With expertise in Quran recitation, Tajweed, and Islamic studies, they ensure your child learns effectively while enjoying the process. Our teachers create a supportive environment, guiding students at their own pace to achieve Quran reading excellence.
          </p>
        </div>
      </div>

      <div className="flex px-4 sm:px-6 flex-wrap -m-4">
        {[
          {
            title: "Teacher 1",
            subtitle: "Quran Teacher",
            imgSrc: "/pics/a1.png",
            width: 600,
            height: 360,
          },
          {
            title: "Teacher 2",
            subtitle: "Islamic Studies Teacher",
            imgSrc: "/pics/a2.png",
            width: 601,
            height: 361,
          },
          {
            title: "Teacher 3",
            subtitle: "Tajweed Specialist",
            imgSrc: "/pics/a3.png",
            width: 603,
            height: 363,
          },
          {
            title: "Teacher 4",
            subtitle: "Arabic Language Teacher",
            imgSrc: "/pics/a4.png",
            width: 602,
            height: 362,
          },
          {
            title: "Teacher 5",
            subtitle: "Youth Mentor",
            imgSrc: "/pics/a5.png",
            width: 605,
            height: 365,
          },
          {
            title: "Teacher 6",
            subtitle: "Community Leader",
            imgSrc: "/pics/a6.png",
            width: 606,
            height: 366,
          },
        ].map((item, index) => (
          <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/3"> {/* Responsive layout */}
            <div className="flex relative">
              <Image
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                src={item.imgSrc}
                width={item.width}
                height={item.height}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  {item.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {item.title}
                </h1>
                <p className="text-gray-700 text-xs sm:text-base leading-relaxed text-justify">
                  Our Online Quran Kids makes learning engaging and accessible for kids. With expert tutors and flexible schedules, your child can begin their Quranic journey from home. Sign up today for an enriching experience in faith and education.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;