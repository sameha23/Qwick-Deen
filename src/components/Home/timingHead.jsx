import React from "react";

const TimingHead = () => {
  return (
    <>
      <div className="md:my-20 my-6 flex flex-col items-center">
        <h1 className="font-bold md:text-[1.5rem] text-[1 rem] text-[#0E1B51]">
          Today’s Prayer Timing
        </h1>
        <hr className="mt-0.5 w-20 mx-auto md:border-[0.10rem] border-black" />
        <p className="mt-4 md:font-bold text-[#6E7697]">Islamic:</p>
        <p className="md:font-bold text-[#6E7697] text-[1rem]">
          As sabt, 18 Muharam 1442 AH
        </p>
        <p className="text-[#6E7697]">Sunday, September 6, 2023</p>
      </div>
    </>
  );
};

export default TimingHead;

