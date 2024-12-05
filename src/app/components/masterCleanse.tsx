// components/MasterCleanse.tsx
"use client";


import React from "react";
import Image from "next/image";

const MasterCleanse: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Online Quran Kids
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Online Kids Quran is an independent entity managed by a small
            group of dedicated professionals. We welcome everyone to learn the
            teachings of the holy Quran and the commandments of Islam
            irrespective of their race, colour, or caste. We aim to make every
            Muslim understand and follow the basic principles of our religion to
            ensure we can become a better Ummah as well as make this world
            a better place for everyone to live in. Easy to understand
            process, equal attention to every student, timing that suits everyone,
            one-to-one sessions.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              title: "",
              subtitle: "",
              imgSrc: "/pics/a1.png",
              width: 600,
              height: 360,
            },
            {
              title: "",
              subtitle: "",
              imgSrc: "/pics/a2.png",
              width: 601,
              height: 361,
            },
            {
              title: "",
              subtitle: "",
              imgSrc: "/pics/a3.png",
              width: 603,
              height: 363,
            },
            {
              title: "",
              subtitle: "",
              imgSrc: "/pics/a4.png",
              width: 602,
              height: 362,
            },
            {
              title: "",
              subtitle: "",
              imgSrc: "/pics/a5.png",
              width: 605,
              height: 365,
            },
            {
              title: "",
              subtitle: "",
              imgSrc: "/pics/a6.png",
              width: 606,
              height: 366,
            },
          ].map((item, index) => (
            <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/3"> {/* Full width on mobile */}
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.imgSrc}
                  width={item.width}
                  height={item.height}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {item.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed">
                    Our Online Quran Kids makes learning engaging and
                    accessible for kids. With expert tutors and flexible
                    schedules, your child can begin their Quranic journey from
                    home. Sign up today for an enriching experience in faith and
                    education.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterCleanse;