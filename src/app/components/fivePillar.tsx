import Image from "next/image";
import React from "react";

const FivePillars = () => {
  return (
    <div className="text-center p-5">
      <h1 className="text-2xl font-bold mb-3 text-green-600">Islamic Pillars</h1>
      <h2 className="text-5xl mb-4 font-semibold font-mono">5 Pillars Of Islam</h2>
      <p className="mb-6 max-w-xl mx-auto">
        The <span className="font-bold"> 5 Pillars of Islam</span> are the fundamental acts of worship that every
        Muslim must follow. They serve as the foundation of a Muslims faith and
        practice, guiding both spiritual and everyday life.
      </p>

      {/* Flex Container for Pillars */}
      <div className="flex justify-evenly flex-wrap gap-8">
        {/* Shahada (Faith) */}
        <div className="flex flex-col items-center w-28 p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
          <Image
            src="/icon/faith-icon.png"
            alt="Shahada (Faith)"
            width={80}
            height={80}
            className="rounded-md"
          />
          <p className="mt-2 font-semibold hover:text-blue-600">
            Shahada (Faith)
          </p>
        </div>

        {/* Salat (Prayer) */}
        <div className="flex flex-col items-center w-28 p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
          <Image
            src="/icon/prayer-icon.png"
            alt="Salat (Prayer)"
            width={80}
            height={80}
            className="rounded-md"
          />
          <p className="mt-2 font-semibold hover:text-blue-600">
            Salat (Prayer)
          </p>
        </div>

        {/* Zakat (Alms) */}
        <div className="flex flex-col items-center w-28 p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
          <Image
            src="/icon/alms-icon.png"
            alt="Zakat (Alms)"
            width={80}
            height={80}
            className="rounded-md"
          />
          <p className="mt-2 font-semibold hover:text-blue-600">Zakat (Alms)</p>
        </div>

        {/* Sawm (Fasting) */}
        <div className="flex flex-col items-center w-28 p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
          <Image
            src="/icon/fasting-icon.png"
            alt="Sawm (Fasting)"
            width={80}
            height={80}
            className="rounded-md"
          />
          <p className="mt-2 font-semibold hover:text-blue-600">
            Sawm (Fasting)
          </p>
        </div>

        {/* Hajj (Pilgrimage) */}
        <div className="flex flex-col items-center w-28 p-4 text-center transition-transform duration-200 transform hover:scale-105 hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg">
          <Image
            src="/icon/pilgrimage.png"
            alt="Hajj (Pilgrimage)"
            width={80}
            height={80}
            className="rounded-md"
          />
          <p className="mt-2 font-semibold hover:text-blue-600">
            Hajj (Pilgrimage)
          </p>
        </div>
      </div>
    </div>
  );
};

export default FivePillars;
