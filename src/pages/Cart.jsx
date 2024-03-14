import React, { useState } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import CartSearch from '../components/cartsearch/CartSearch'
import ProductSideBar from '../components/productsidebar/ProductSideBar'
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
// 本頁切換底下三種流程 分為First, Second, Third
import CartDetail from '../components/cartdetail/CartDetail';
import CartPayment from '../components/cartpayment/CartPayment';
import CartConfirm from '../components/cartconfirm/CartConfirm'

const Cart = () => {
  const sideBarTitle = '購物專區'
  const [isFirst, setIsFirst] = useState(false)
  const [isSecond, setIsSecond] = useState(true)
  const [isThird, setIsThird] = useState(false)


  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <CartSearch />
      <div className="container">
        <div className="row">
          <ProductSideBar title={ sideBarTitle }/>
          <div className='col-1'></div>
          <div className='col-9'>
            { isFirst && <CartDetail /> }
            { isSecond && <CartPayment /> }
            { isThird && <CartConfirm />}
            
          </div>
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