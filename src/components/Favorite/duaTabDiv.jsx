import React from "react";
import "./Fourth.css";

const tabData = [
    { id: 1, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 2, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 3, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 4, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 5, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 6, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 7, header: "The Excellence of Zikr", paragraph: "", isActive: false },
    { id: 8, header: "The Excellence of Zikr", paragraph: "", isActive: false },
   
  ];
  

export const DuaTabDiv = () => {
  const [activeTab, setActiveTab] = React.useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-70% md:w-[90%] md:my-20 md:mx-auto mx-3">
      <div className="w-50% mx-6 md:w-full">
        <div className="flex flex-wrap gap-3 md:gap-4 mt-5 fontChange">
          {tabData.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`w-[164px] h-[60px] md:w-[263px] md:h-[78px] rounded-md md:rounded-xl p-5 flex relative items-center ${
                activeTab === tab.id
                  ? "bg-gradient-to-l from-[#179F70] to-[#43B156]"
                  : "bg-[#FCF3DD]"
              }`}
            >
              <span
                className={`flex items-center justify-center text-[18px] rounded-md md:rounded-lg h-[25px] w-[30px] md:h-[40px] md:w-[40px]  ${
                  activeTab === tab.id
                    ? "text-[#F5FAF6] bg-[#189F6F]"
                    : "text-[#3E4974] bg-[#FAE8BB]"
                }`}
              >
                {tab.id}
              </span>
              <div className="inline-block ml-3 md:ml-5">
                <span
                  className={`my-3 text-[12px] md:text-[18px] ${
                    activeTab === tab.id ? "text-[#FCF3DD]" : "text-[#3E4974]"
                  }`}
                >
                  {tab.header}
                </span>
                <p
                  className={`text-[10px] md:text-[16px] leading-8 ${
                    activeTab === tab.id ? "text-[#FCF3DD]" : "text-[#02274ccc]"
                  }`}
                >
                  {tab.paragraph}
                </p>
              </div>
              <div
                className={`cross-sign absolute left-[150px] top-1 md:top-1 md:left-[240px] md:text-2xl h-[25px] w-[30px] ${
                  activeTab === tab.id ? "text-[#FCF3DD]" : "text-[#02274ccc]"
                }`}
              >
                ×
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuaTabDiv;
