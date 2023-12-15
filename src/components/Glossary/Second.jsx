import React from "react";
import Banner from "./banner";
import Search from "./searchDiv";
import SearchResult from "./searchResult";
import Break from "../../components/Break";
import "../../app/globals.css";
import "./Second.css";

const First = () => {
  return (
    <>
      <Banner />
      <Search />
      <Break />
      <SearchResult />
    </>
  );
};

export default First;
