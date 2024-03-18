import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footersecond from '../components/footersecond/Footersecond';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Modify from '../components/modify/modify';
const Service = () => {
  
  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <br/>
        <br/>
        <Modify/>
  
        {/* 底下用8個換行空出雨footer距離 */}
        <br />
        <Footersecond/>
        <BackToTopBtn />
      </React.Fragment>
  )
}

export default Service