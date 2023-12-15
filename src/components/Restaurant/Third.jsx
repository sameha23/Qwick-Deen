import React from "react";
import Banner from "./banner";
import Suggestions from "./suggestions";
import Map from "./map";
import HeaderDiv from "./headerDiv";
import "../../app/globals.css";
import "./Third.css";

const Third = () => {
  return (
    <>
      <Banner />
      <HeaderDiv/>
      <Suggestions />
      <Map />
      
    </>
  );
};

export default Third;
