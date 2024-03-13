import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

const Service = () => {
  
  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <PathBox />
        <div className="container">
            <div className="row">
                <div>長照據點 Page</div>
            </div>
        </div>
  
        {/* 底下用8個換行空出雨footer距離 */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
        <BackToTopBtn />
      </React.Fragment>
  )
}

export default Service