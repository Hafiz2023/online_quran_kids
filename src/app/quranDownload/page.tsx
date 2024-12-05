"use client";

import { Paras } from "@/lib/para";
import React from "react";

const QuranDownload: React.FC = () => {
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Download Para Wise Quran
      </h1>
      <div className="overflow-x-auto text-center">
        <table className="min-w-full bg-white text-center">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">
                Para No.
              </th>
              <th className="py-2 px-4 border-b border-gray-200">
                Arabic Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200">
                Transliterated Name
              </th>
              <th className="py-2 px-4 border-b border-gray-200">Download</th>
            </tr>
          </thead>
          <tbody>
            {Paras.map((para) => (
              <tr key={para.number}>
                <td className="py-2 px-4 border-b border-gray-200 text-left">
                  {para.number}
                </td>
                <td className="py-2 px-4 border-b font-bold border-gray-200 text-center">
                  {para.arabic}
                </td>
                <td className="py-2 px-4 border-b font-bold border-gray-200 text-center">
                  {para.transliterated}
                </td>
                <td className="py-2 px-4 border-b border-gray-200 text-center">
                  <a
                    href={para.downloadLink} target="_blank"
                    className="text-blue-500 underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuranDownload;
