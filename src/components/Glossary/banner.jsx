import React from "react";
import Image from "next/image";
import OBJECTS from "/public/img/g1.png";
import "../../app/globals.css";

const Banner = () => {
  return (
    <div className="bg-[#FFF9EE] bg-opacity-100 rounded-md md:p-8 p-5 flex flex-row items-center gap-3">
      {/* Left Column */}
      <div className="md:w-2/5 sm:w-3/5 flex flex-row-reverse">
        {/* OBJECTS Image */}
        <Image src={OBJECTS} alt="Your Image" className="" />
      </div>
      {/* Right Column */}
      <div className="md:w-2/4 sm:w-2/5 md:px-8 sm:px-8">
        <div className="sm:text-sm md:text-5xl font-bold mb-4 heading leading-6 section-header">
          <span className="primary-color"><span className="text-blue-950">Glossary of</span> Islamic terms</span>
        </div>

        <p className="text-xs md:text-lg text-[#6E7697]">
          Want to know the difference between hajj and halal? Here is a short
          glossary of some of the most commonly used words and phrases in
          Islamic religion and culture.
        </p>
      </div>
    </div>
  );
};

export default Banner;
