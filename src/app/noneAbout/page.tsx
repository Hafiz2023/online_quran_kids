"use client"; // For Next.js if using the app directory
import React from "react";
import Image from "next/image";

const NoneAbout: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            About Online Kids Quran
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            <strong>Who We Are</strong>
            <br />
            Online Kids Quran is a specialized online platform offering Quranic education tailored to children of all ages and skill levels. Our focus is on helping young learners master Quran recitation with proper Tajweed while learning essential Islamic values. We are passionate about providing an enjoyable, interactive learning experience that nurtures a deep connection with the Holy Quran.
            <br /><br />
            Our qualified team of experienced tutors is committed to creating a supportive and encouraging environment where each child can learn at their own pace. Whether your child is just beginning with Noorani Qaida or looking to improve their Quran recitation, we have the right course for them.
            <br /><br />
            <strong>Our Vision</strong>
            <br />
            To inspire children to love Quran reading and develop a lifelong relationship with the Holy Quran while building strong Islamic values and knowledge.
            <br /><br />
            <strong>Our Mission</strong>
            <br />
            Our mission is to make Quranic education accessible, enjoyable, and effective for children worldwide. Through our one-on-one interactive lessons, we aim to provide personalized learning experiences that ensure every child can achieve their Quran reading goals.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center">
          <div className="lg:w-1/2 sm:w-1/2 p-4">
            <Image
              src="/image1.jpg"
              alt="Mosque with arches and a pool"
              width={500}
              height={300}
              className="object-cover object-center rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2 sm:w-1/2 p-4">
            <Image
              src="/image2.jpg"
              alt="Person holding prayer beads"
              width={500}
              height={300}
              className="object-cover object-center rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoneAbout;