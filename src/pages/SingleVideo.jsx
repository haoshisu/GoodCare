import React, { } from 'react';
// import { useParams } from 'react-router-dom'
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import VideoSideBar from '../components/videosidebar/VideoSideBar';
import VideoContent from '../components/videocontent/VideoContent';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

const Service = () => {
  // const { id } = useParams()

  const sidebarTitle = '影音專區'

  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <PathBox />
        <div className="container">
            <div className="row">
              <VideoSideBar title={ sidebarTitle }/>

              {/* 這裡放你的主內容 */}
              <div className='col-9'>
                <VideoContent />
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