"use client";

import { Instagram, Twitter, Youtube } from "lucide-react";
import { Linkedin } from "lucide-react";
import React from "react";

import WhatsAppFooter from "../components/whatsAppFooter";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              ONLINE QURAN <span className="text-blue-600">KIDS</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Instagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <Twitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <Linkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <Youtube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Quick Links</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/quranDownload">QuranDownload</Link>{" "}
              {/* Link added here */}
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/teacher">Teacher</Link> {/* Link added here */}
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/about">About</Link> {/* Link added here */}
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/contactUs">Contact</Link> {/* Link added here */}
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/servicePackages">Fee</Link> {/* Link added here */}
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/privacyPolicy">Privacy Policy</Link>{" "}
              {/* Link added here */}
            </li>
          </ul>
        </div>

        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Stay Connected
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>

            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2024 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            Hafiz Adil{" "}
          </span>
        </h1>
        <WhatsAppFooter />
      </div>
    </div>
  );
}

export default Footer;
