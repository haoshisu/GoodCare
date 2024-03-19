import React, { useState } from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import Footersecond from "../components/footersecond/Footersecond";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import SubsidyHome from "../components/subsidy/subsidy";
import {
  SubsidyNoMatch,
  SubsidyResult,
  SubsidySearch,
  SubsidySearchCFM,
} from "./appIndex";

const Service = () => {
  const [isHome, setIsHome] = useState(true);
  const [isFirst, setIsFirst] = useState(false); //search
  const [isSecond, setIsSecond] = useState(false); //confirm
  const [isThird, setIsThird] = useState(false); //result
  const [isNoMatch, setIsNoMatch] = useState(false); //nomatch

  const goToFirst = () => {
    setIsHome(false);
    setIsFirst(true);
    setIsSecond(false);
    setIsThird(false);
  };
  const goToSecond = () => {
    setIsHome(false);
    setIsFirst(false);
    setIsSecond(true);
    setIsThird(false);
  };
  const goToThird = () => {
    setIsHome(false);
    setIsFirst(false);
    setIsSecond(false);
    setIsThird(true);
  };

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox />
      {isHome && <SubsidyHome goToFirst={goToFirst} />}
      {isFirst && <SubsidySearch goToSecond={goToSecond} />}
      {isSecond && (
        <SubsidySearchCFM goToThird={goToThird} goToFirst={goToFirst} />
      )}
      {isThird && <SubsidyResult goToFirst={goToFirst} />}
      {isNoMatch && <SubsidyNoMatch />}

      <br />
      <Footersecond />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Service;
