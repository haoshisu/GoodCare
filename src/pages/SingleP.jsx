import React from 'react';
import '../asset/css/news.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import Footer from '../components/footer/Footer';
import Path from "../components/Path/path";
import ProductSideBar from "../components/productsidebar/ProductSideBar";
import Single from "../components/Single/single"
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
// icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function SingleProduct() {
  return (
    <React.Fragment>
      <Header/>
      <IndexNav/>
      <div className="container">
        <div className="row">
          <div className="col-12  pb-4">
            <Path/>
          </div>
        </div>
        <>
        
        </>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-2">
            <ProductSideBar/>
          </div>
          <div className="col-10">
            <Single/>
          </div>
        </div>
      </div>
      <Footer/>
      <BackToTopBtn/>
    </React.Fragment>
  );
}

export default SingleProduct;
