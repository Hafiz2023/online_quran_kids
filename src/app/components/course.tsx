"use client";

import Image from "next/image";
import React from "react";

const Course = () => {
  return (
    <div className="p-12">
      <div className="text-center px-8 lg:w-full">
        <h1 className="text-2xl font-bold mb-3 text-green-600">Why Choose</h1>
        <h2 className="text-5xl mb-4 font-semibold font-mono">
          ONLINE QURAN KIDS
        </h2>
        <div className="mb-6 max-w-xl mx-auto text-center">
          The <span className="font-bold">ONLINE QURAN KIDS</span> is committed to providing high-quality, personalized Quran education for children of all ages. Our platform is designed to make Quran learning easy, accessible, and engaging from the comfort of your home. Here’s why parents trust us with their children’s Quranic education.
        </div>

        {/* Flex Container for Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Adjusted grid layout */}
          {/* Shahada (Faith) */}
          <div className="flex flex-col items-center p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src="/course/pic6.png"
              alt="Shahada (Faith)"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="mt-2 font-semibold hover:text-green-600">
              Experienced and Certified Tutors
            </div>
            <div className="text-justify">
              Our team of male and female tutors are not only experts in Quranic recitation and Tajweed, but they are also skilled in teaching children in an interactive and enjoyable manner. Their patience and dedication ensure that every student progresses at their own pace.
            </div>
          </div>

          {/* Salat (Prayer) */}
          <div className="flex flex-col items-center p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src="/course/pic3.png"
              alt="Salat (Prayer)"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="mt-2 font-semibold hover:text-blue-600">
              Customized Learning Approach
            </div>
            <div className="text-justify">
              We understand that every child learns differently, which is why our courses are tailored to meet the individual needs of each student. From beginner to advanced levels, we provide a learning experience that aligns with your child’s abilities.
            </div>
          </div>

          {/* Zakat (Alms) */}
          <div className="flex flex-col items-center p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src="/course/pic1.png"
              alt="Zakat (Alms)"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="mt-2 font-semibold hover:text-green-600">
              One-on-One Interactive Classes
            </div>
            <div className="text-justify">
              Our one-on-one online classes ensure personalized attention and real-time feedback. Conducted through Zoom or Skype, these sessions create an engaging environment where students feel comfortable and confident in their learning.
            </div>
          </div>

          {/* Sawm (Fasting) */}
          <div className="flex flex-col items-center p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src="/course/pic2.png"
              alt="Sawm (Fasting)"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="mt-2 font-semibold hover:text-green-600">
              Multilingual Support
            </div>
            <div className="text-justify">
              We cater to students from different linguistic backgrounds by offering lessons in English, Arabic, Urdu, and Hindi. This helps children learn in the language they are most comfortable with, ensuring a smoother learning process.
            </div>
          </div>

          {/* Hajj (Pilgrimage) */}
          <div className="flex flex-col items-center p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
            <Image
              src="/course/pic4.png"
              alt="Hajj (Pilgrimage)"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div className="mt-2 font-semibold hover:text-blue-600">
              Affordable & Flexible Payment Options
            </div>
            <div className="text-justify">
              We believe in making Quran education affordable for all. Our pricing is competitive, and we offer a variety of payment methods including PayPal, MasterCard, Zelle, and bank transfers. Additionally, we offer customized and discounted fee plans to meet individual needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;