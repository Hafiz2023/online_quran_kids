"use client";
import { useEffect, useState } from "react";

function Counter({ end, duration }: { end: string; duration: string|number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = parseInt(end, 10);
    const incrementTime: number = Math.floor((duration * 1000) / endValue);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}+</span>;
}

export default function StatsPage() {
  return (
    <div className="bg-white">
      <div className="flex justify-around items-center text-center space-x-4 mt-16 mb-16">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600">
            <Counter end="88" duration="2" />
          </span>
          <span className="text-green-600">Active Students</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600">
            <Counter end="680" duration="3" />
          </span>
          <span className="text-green-600">Certified By Online kids Quran</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold text-green-600">
            <Counter end="30" duration="2" />
          </span>
          <span className="text-green-600">Certified Teachers</span>
        </div>
      </div>
    </div>
  );
}
