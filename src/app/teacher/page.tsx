import React from "react";
import OurTeam from "../ourTeam/page";

const Teacher = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-2xl font-bold mb-3 text-green-600 text-center p-5">
            Meet Our Teachers
          </div>
          <div className="mb-6 max-w-xl mx-auto">
            At <span className="font-bold"> Online Quran Kids</span> we pride
            ourselves on having a team of highly qualified, dedicated, and
            experienced Quran tutors. Our teachers are passionate about
            imparting Quranic knowledge to children, ensuring that every lesson
            is interactive, personalized, and effective. Whether it’s teaching
            Noorani Qaida, Quran recitation, or basic Islamic teachings, our
            teachers are committed to helping your child succeed.
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default Teacher;
