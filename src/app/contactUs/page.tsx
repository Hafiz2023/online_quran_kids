"use client"; // For Next.js if using the app directory
import React from "react";
import WhatsAppLink from "../components/whatsAppLink";

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-600"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name here"
              className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          {/* Last Name */}
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-600"
            >
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name here"
              className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
        </div>
        {/* Email Address */}
        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Add email"
            className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        {/* Subject */}
        <div className="flex flex-col mt-4">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-gray-600"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="How can we help you?"
            className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        {/* Comments/Questions */}
        <div className="flex flex-col mt-4">
          <label
            htmlFor="comments"
            className="text-sm font-medium text-gray-600"
          >
            Comments / Questions <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Comments"
            rows={4}
            className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            required
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded mt-6"
        >
          Send Message
        </button>
      
      </form>
      <div className="ml-4 justify-evenly">
      <WhatsAppLink />
      </div>
    </div>
  );
};

export default ContactForm;
