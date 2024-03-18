import React, { useState } from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import SubsidyHome from "../components/subsidy/subsidy";
import { SubsidyNoMatch, SubsidyResult, SubsidySearch, SubsidySearchCFM } from "./appIndex";

const Service = () => {
  const [ isHome, setIsHome ] = useState(true)
  const [ isFirst, setIsFirst ] = useState(false)
  const [ isSecond, setIsSecond ] = useState(false)
  const [ isThird, setIsThird ] = useState(false)
  const [ isNoMatch, setIsNoMatch ] = useState(false)

  const goToFirst = () => {
    setIsHome(false)
    setIsFirst(true)
  }

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox />
        { isHome && <SubsidyHome goToFirst={ goToFirst }/>}
        { isFirst && <SubsidySearch />}
        { isSecond && <SubsidySearchCFM />}
        { isThird && <SubsidyResult />}
        { isNoMatch && <SubsidyNoMatch />}

      <br />
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Service;
