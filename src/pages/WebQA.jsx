import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

const Service = () => {
  const sidebarTitle = '常見問題'

  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <PathBox />
        <div className="container">
            <div className="row">
              <SideBar title={ sidebarTitle }/>

              {/* 這裡放你的主內容 */}
              <div className='col-9'>
                <div>常見問題 Page</div>
              </div>
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