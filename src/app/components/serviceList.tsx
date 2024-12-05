"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Link from "next/link";
function ServiceList() {
  return (
    <div className="grid grid-cols-2 mx-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title Section */}
        <div className="sm:mt-10 mt-5 mb-5 sm:mb-10 text-2xl sm:text-4xl font-bold text-start">
          What We Offer
        </div>

        {/* Description Section */}
        <div className="text-base text-justify mb-10">
          Our online Quran kids offers a wide range of services to help you or
          your child embark on a meaningful Quranic learning journey, along with
          valuable Islamic education. Here’s an overview of what we provide:
        </div>

        {/* Services List */}
        <div className="text-sm sm:text-base font-bold grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div>Quran Reading for Beginners</div>
          <div>Tajweed & Quran Recitation</div>
          <div>Quran Memorization</div>
          <div>Basic Islamic Teachings</div>
          <div>Noorani Qaida for Beginners</div>
          <div>Translation Services</div>
        </div>

        {/* Join Us Section */}
        <div className="text-base text-justify mb-10">
          Join our Online Quran kids community for a personalized, flexible, and
          enriching learning experience. Whether you’re beginning your Quranic
          journey or refining your recitation, our expert tutors are here to
          guide you. Learn at your own pace from anywhere in the world and
          deepen your connection to the Holy Quran and Islamic teachings.
        </div>

        {/* Button Section */}
        <div className="flex justify-start mb-10">
          <Button className="bg-green-600 ">
            <Link target="_blank" href="/CourseRegistrationForm">
              Start your journey with us today
            </Link>
          </Button>
        </div>

        {/* Mid Image with Text Section */}
      </div>
      <div className="hidden sm:block">
        <div className="flex justify-end mt-24">
          <Image
            className="rounded-t-full"
            src="/mid.png"
            width={400}
            height={300}
            alt="mid"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
