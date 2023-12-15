import React from "react";

const HeaderDiv = () => {
  return (
    <>
      <div className="md:mt-24 mt-10 md:w-[75%] md:mx-auto md:border-2 border-yellow-300 rounded-xl">
        <div className="bg-[#FEFAEE] rounded-xl p-5">
          <h3 className="text-[14px] md:text-[26px] font-bold primary-color">
            Find Halal Food and Restaurants Near You
          </h3>
          <p className="text-[#02274ccc] text-[13px] md:text-[16px] mt-[14px] md:mt-0">
            Guide to Halal food places, restaurants and buffets worldwide. Read
            reviews. Get directions. Share your Halal dining experience.
          </p>
        </div>
      </div>
      <div className="mx-5 md:w-[75%] md:mx-auto my-7">
        <input
          type="text"
          placeholder="Suggest Restaurant......."
          className="w-full text-md text-gray-900 bg-transparent outline-none h-14"
        />
      </div>
    </>
  );
};

export default HeaderDiv;
