import React from "react";
import Image from "next/image";
import OBJECTS from "/public/img/g2_1.png";
import "../../app/globals.css";

const Banner = () => {
  return (
    <div className="bg-[#FFFDF8] bg-opacity-100 rounded-md p-5 md:p-8 md:pt-[125px] flex flex-col md:flex-row items-center">
      {/* Left Column */}

      <div className="block text-2xl text-center sm:text-start font-bold heading leading-6 md:hidden mb-2">
          <span className="primary-color">
            <span className="text-blue-950">Halal </span>  Restaurant
          </span>
        </div>
      <div className="md:w-2/5 flex flex-row-reverse">
        {/* OBJECTS Image */}
        <Image src={OBJECTS} alt="Your Image" className="h-40 " />
      </div>

      {/* Right Column */}
      <div className="md:w-2/4 sm:w-2/5 px-8">
        {/* <div className="text-center sm:text-start md:text-4xl font-bold heading leading-6 ">
          <span className="primary-color">
            <span className="text-blue-950">Halal </span>  Restaurant
          </span>
        </div> */}
        <div className="hidden text-center sm:text-start md:text-[45px] font-bold heading leading-6 md:block">
          <span className="primary-color">
            <span className="text-blue-950">Halal </span>  Restaurant
          </span>
        </div>

        <p className="md:text-lg text-[#6E7697] mt-10">
          Halal is an Arabic word that simply means lawful or permitted, but
          generally refers to what’s allowed under Islamic law. It’s the
          opposite of haram, which means unlawful or prohibited. Some things are
          very clear-cut halal or haram, however, as with a lot of religious
          law, other things can be open to interpretation.
        </p>
      </div>
    </div>
  );
};

export default Banner;
