import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import ProductSideBar from '../components/productsidebar/ProductSideBar'
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

const Cart = () => {
  const sideBarTitle = '購物專區'
  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <div className="container">
            <div className="row">
                <ProductSideBar title={ sideBarTitle }/>
                <div className='col-9'>超猛首頁 Page</div>
            </div>
        </div>
  
        {/* 底下用8個換行空出footer距離 */}
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

export default Cart