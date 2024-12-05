"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroPage() {
  return (
    <div className="bg-green-700 flex md:justify-between sm:flex-row sm:mt-24 flex-col px-2 sm:px-10 py-4 sm:py-10">
      {/* Text Section */}
      <div className="sm:w-1/2 flex flex-col justify-center items-start p-8 space-y-6 bg-green-700">
        <h1 className="text-xl sm:text-3xl mt-8 sm:mt-0 font-bold text-white">
          Welcome to Our Online Quran Kids
        </h1>
        <p className="text-white text-xs text-justify sm:text-lg">
          At Online Quran Kids , we specialize in providing engaging,
          personalized Quran reading lessons for children. Our mission is to
          help kids of all ages build a solid foundation in Quran recitation
          while learning essential Islamic teachings. Whether your child is a
          complete beginner or looking to enhance their recitation skills, we
          offer tailored courses that suit every level.
        </p>
        <Button className="bg-white  text-black ">
          <Link target="_blank" href="/CourseRegistrationForm">
            Get Started
          </Link>
        </Button>
      </div>
      {/* Image Section */}
      <div className="sm:block hidden bg-green-700">
        <Image
          className="h-auto w-80 rounded-md"
          src="/HeroPic.png"
          width={400}
          height={400}
          alt="HeroPic"
        />
      </div>
    </div>
  );
}
