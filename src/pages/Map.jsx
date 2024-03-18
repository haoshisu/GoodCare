import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footersecond from '../components/footersecond/Footersecond';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Map from '../components/map/Map';

const Service = () => {

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox />
      <Map />
      <br />
      {/* 底下用8個換行空出雨footer距離 */}
      <Footersecond />
      <BackToTopBtn />
    </React.Fragment>
  )
}

export default Service