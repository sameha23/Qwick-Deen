"use client";
import React from "react";
import { useState } from "react";
import SalatTabContent from "./salatTabContent";
import TahajudTabContent from "./tahajudTabContent";
import WitrTabContent from "./witrTabContent";

const RulesHead = () => {
  const [selectedTab, setSelectedTab] = useState("Salat");
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const TabContent = ({ tab }) => {
    switch (tab) {
      case "Salat":
        return <SalatTabContent />;
      case "Tahajud":
        return <TahajudTabContent />;
      case "Witr":
        return <WitrTabContent />;
      default:
        return null;
    }
  };

  return (
    <>
      <useClient>
        <div className="mt-20 mb-4 md:mb-16 flex flex-col items-center">
          <h1 className="font-bold md:text-[1.8rem] sm:text-[1.3rem] text-[#0E1B51]">
            Rules of Prayers
          </h1>
          <hr className="mt-0.5 w-20 mx-auto border-[0.10rem] border-black" />
        </div>

        <div className="flex justify-center items-center">
          <button
            className={`mx-2 rounded-md px-[16.5px] py-[10.3px] md:px-6 md:py-4  ${
              selectedTab === "Salat"
                ? "bg-[#5DB373] text-white"
                : "border-2 border-[#35A050] text-[#35A050]"
            }`}
            onClick={() => handleTabClick("Salat")}
          >
            <span className="font-bold">Salat</span>
          </button>
          <button
            className={`mx-2 rounded-md px-[16.5px] py-[10.3px] md:px-6 md:py-4 ${
              selectedTab === "Tahajud"
                ? "bg-[#5DB373] text-white"
                : "border-2 border-[#35A050] text-[#35A050]"
            }`}
            onClick={() => handleTabClick("Tahajud")}
          >
            <span className="font-bold">Tahajud</span>
          </button>
          <button
            className={`mx-2 rounded-md px-[16.5px] py-[10.3px] md:px-6 md:py-4 ${
              selectedTab === "Witr"
                ? "bg-[#5DB373] border-2 border-[#35A050] text-white"
                : "border-2 border-[#35A050] text-[#35A050]"
            }`}
            onClick={() => handleTabClick("Witr")}
          >
            <span className="font-bold">Witr</span>
          </button>
        </div>
        <div className="mt-4">
          <TabContent tab={selectedTab} />
        </div>
      </useClient>
    </>
  );
};

export default RulesHead;
