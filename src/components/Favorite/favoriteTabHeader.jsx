"use client";
import React from "react";
import { useState } from "react";
import SuraTabDiv from "./suraTabDiv";
import AllTabDiv from "./allTabDiv";
import DuaTabDiv from "./duaTabDiv";
import HadithTabDiv from "./hadithTabDiv";
import BabyNameTabDiv from "./babyNameTabDiv";

const FavoriteTabHeader = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const TabContent = ({ tab }) => {
    switch (tab) {
      case "All":
        return <AllTabDiv />;
      case "Sura":
        return <SuraTabDiv />;
      case "Duas and Zikr":
        return <DuaTabDiv />;
      case "Hadith":
        return <HadithTabDiv />;
      case "Baby Name":
        return <BabyNameTabDiv />;
      default:
        return null;
    }
  };

  return (
    <>
      <useClient>
        <div className="mt-6 md:mt-20 mb-7 md:mb-16 flex flex-col items-center">
          <h1 className="font-bold text-[1.8rem] text-[#0E1B51]">
            Favorite
          </h1>
          <hr className="mt-0.5 w-20 mx-auto border-[0.10rem] border-black" />
        </div>

        <div className="hidden md:flex justify-center items-center gap-3">
          <button
            className={`mx-2 rounded-md px-14 py-4 border-2 border-[#5DB373] ${
              selectedTab === "All"
                ? "bg-[#5DB373] text-white"
                : " text-[#5DB373]"
            }`}
            onClick={() => handleTabClick("All")}
          >
            <span className="font-bold">All</span>
          </button>
          <button
            className={`mx-2 rounded-md px-12 py-4 border-2 border-[#5DB373] ${
              selectedTab === "Sura"
                ? "bg-[#5DB373] text-white"
                : "text-[#5DB373]"
            }`}
            onClick={() => handleTabClick("Sura")}
          >
            <span className="font-bold">Sura</span>
          </button>
          <button
            className={`mx-2 rounded-md px-12 py-4 border-2 border-[#5DB373] ${
              selectedTab === "Duas and Zikr"
                ? "bg-[#5DB373] text-white"
                : "text-[#5DB373]"
            }`}
            onClick={() => handleTabClick("Duas and Zikr")}
          >
            <span className="font-bold">Duas and Zikr</span>
          </button>
          <button
            className={`mx-2 rounded-md px-12 py-4 border-2 border-[#5DB373] ${
              selectedTab === "Hadith"
                ? "bg-[#5DB373] text-white"
                : "text-[#5DB373]"
            }`}
            onClick={() => handleTabClick("Hadith")}
          >
            <span className="font-bold">Hadith</span>
          </button>
          <button
            className={`mx-2 rounded-md px-12 py-4 border-2 border-[#5DB373] ${
              selectedTab === "Baby Name"
                ? "bg-[#5DB373] text-white"
                : "text-[#5DB373]"
            }`}
            onClick={() => handleTabClick("Baby Name")}
          >
            <span className="font-bold">Baby Name</span>
          </button>
        </div>

        <div className="flex md:hidden justify-center items-center gap-3 border-b-2 border-[#E7E9EE]">
          <button
            className={`mx-2  ${
              selectedTab === "All"
                ? " text-[#5DB373] border-b-2 border-[#5DB373]"
                : " text-[#AED9B9]"
            }`}
            onClick={() => handleTabClick("All")}
          >
            <span className="font-bold text-sm">All</span>
          </button>
          <button
            className={`mx-2  ${
              selectedTab === "Sura"
                ? " text-[#5DB373] border-b-2 border-[#5DB373]"
                : "text-[#AED9B9]"
            }`}
            onClick={() => handleTabClick("Sura")}
          >
            <span className="font-bold text-sm">Sura</span>
          </button>
          <button
            className={`mx-2  ${
              selectedTab === "Duas and Zikr"
                ? " text-[#5DB373] border-b-2 border-[#5DB373]"
                : "text-[#AED9B9]"
            }`}
            onClick={() => handleTabClick("Duas and Zikr")}
          >
            <span className="font-bold text-sm">Duas and Zikr</span>
          </button>
          <button
            className={`mx-2  ${
              selectedTab === "Hadith"
                ? " text-[#5DB373] border-b-2 border-[#5DB373]"
                : "text-[#AED9B9]"
            }`}
            onClick={() => handleTabClick("Hadith")}
          >
            <span className="font-bold text-sm">Hadith</span>
          </button>
          <button
            className={`mx-2  ${
              selectedTab === "Baby Name"
                ? " text-[#5DB373] border-b-2 border-[#5DB373]"
                : "text-[#AED9B9]"
            }`}
            onClick={() => handleTabClick("Baby Name")}
          >
            <span className="font-bold text-sm">Baby Name</span>
          </button>
        </div>
        <div className="mt-4">
          <TabContent tab={selectedTab} />
        </div>
      </useClient>
    </>
  );
};

export default FavoriteTabHeader;
