import React from "react";
import Image from "next/image";
import OBJECTS from "/public/home/OBJECTS.png";
import Design from "/public/home/Design.png";
import "../../app/globals.css";

const Banner = () => {
  return (
    <div className="bg-[#FFF9EE] bg-opacity-100 rounded-md md:p-8 p-5 flex flex-row items-center">
      {/* Left Column */}
      <div className="w-1/3 flex flex-row-reverse">
        {/* OBJECTS Image */}
        <Image
          src={OBJECTS}
          alt="Your Image"
          className=""
        />
      </div>

      {/* Right Column */}
      <div className="w-3/5 md:w-1/3 pl-5 md:px-8 md:pl-0">
        <div className="sm:text-sm md:text-3xl font-bold mb-4 heading text-center md:leading-loose sm:leading-normal section-header">
          <span className="primary-color">
            "Indeed We Belong to <span className="yellow-color">Allah</span>,
            and Indeed to Him We Will Return"
          </span>
        </div>

        <p className="text-xs md:text-base text-[#6E7697] text-center">
          Each Rak'at taht beliver performs in jama'at better than offering one
          hundred thousand dinars in charity to the poor.
        </p>
      </div>

      <div className="hidden md:w-1/3 md:block px-8">
        <Image
          src={Design}
          alt="Your Image"
          className="h-45 w-auto ml-8 mt-32"
        />
      </div>
    </div>
  );
};

export default Banner;
