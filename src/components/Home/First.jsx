import React from "react";
import Banner from "./banner";
import TimingHead from "./timingHead";
import TimingDetails from "./timingDetails";
import RulesHead from "./rulesHead";
import "../../app/globals.css";
import "./First.css";

const First = () => {
  return (
    <>
      <Banner />
      <TimingHead />
      <TimingDetails />
      <RulesHead />
    </>
  );
};

export default First;
