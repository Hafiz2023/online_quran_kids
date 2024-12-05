"use client";
import React from "react";
import NoneAbout from "../noneAbout/page";

const About = () => {
  return (
    <div>
      <div>
        <div className="text-2xl font-bold mb-3 text-green-600 text-center p-5">About</div>
        <div className="mb-6 max-w-xl mx-auto">
          Welcome to <span className="font-bold"> Online Quran Kids</span>  where we are dedicated to providing
          children with an engaging and effective way to learn the Quran from
          the comfort of their own homes. Our mission is to make Quran reading
          accessible for children around the world while ensuring they develop a
          strong foundation in Islamic knowledge.
        </div>
      </div>
      <div>
        <NoneAbout/>
      </div>
    </div>
  );
};

export default About;
