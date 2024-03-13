import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

const Home = () => {
  
  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <div className="container">
            <div className="row">
                <div>超猛首頁 Page</div>
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

export default Home