import React from "react";

const Search = () => {
  return (
    <div className="relative flex justify-center pt-[32.43px] md:pt-[85px]">
      <div className="flex flex-col items-center justify-center px-8 py-3 m-4 bg-green-50 h-[300px] w-4/5 md:w-3/4 rounded-lg shadow-sm">
        <h1 className="mb-2 text-[36px] font-bold">Glossary</h1>
        <input
          type="text"
          placeholder="What do you like to search?"
          className="w-full text:xl md:text-2xl text-gray-900 bg-transparent border-b-2 border-gray-800 outline-none h-14"
        />
      </div>

      <div className="absolute flex md:gap-10 w-9/12 md:w-3/5 md:px-32 px-6 md:py-20 py-8 bg-white rounded-2xl shadow top-[80%] left-[12%] md:left-[20%] h-auto">
        <div>
          <h3 className="md:text-[20px] text-gray-400 capitalize">
            WORD OF THE DAY
          </h3>
          <h1 className="md:text-[35px] text-green-600 my-4 font-bold">Hadith</h1>
          <h5 className="md:text-[20px] font-bold mb-3">NOUN</h5>
          <p className="text-gray-400">
            A traditional account of things said or done by Muhammad recorded by
            his followers, commonly taught as a part of Islamic theology.
          </p>
        </div>
        <div>
          <h3 className="md:text-[20px] text-gray-400">LAST SEARCH QUERY</h3>
          <h1 className="md:text-[35px] text-green-600 my-4 font-bold">
            "prostration"
          </h1>
          <h5 className="md:text-[20px] font-bold mb-3">VERB</h5>
          <p className="text-gray-400">
            to bow down head in front of Allah(swt)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
