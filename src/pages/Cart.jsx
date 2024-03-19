import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import CartSearch from "../components/cartsearch/CartSearch";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
// 本頁切換底下三種流程 分為First, Second, Third
import CartDetail from "../components/cartdetail/CartDetail";
import CartPayment from "../components/cartpayment/CartPayment";
import CartConfirm from "../components/cartconfirm/CartConfirm";

const Cart = () => {
  // const sideBarTitle = "購物專區";
  const { category } = useParams();

  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);

  const goToFirst = () => {
    setIsFirst(true);
    setIsSecond(false);
    setIsThird(false);
  };
  const goToSecond = () => {
    setIsFirst(false);
    setIsSecond(true);
    setIsThird(false);
  };
  const goToThird = () => {
    setIsFirst(false);
    setIsSecond(false);
    setIsThird(true);
  };

  return (
    <>
      <Header />
      <IndexNav />
      <CartSearch
        doFirstBtn={goToFirst}
        doSecondBtn={goToSecond}
        doThirdBtn={goToThird}
      />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-10">
            {isFirst && (
              <CartDetail
                doFirstBtn={goToFirst}
                doSecondBtn={goToSecond}
                doThirdBtn={goToThird}
              />
            )}
            {isSecond && (
              <CartPayment
                doFirstBtn={goToFirst}
                doSecondBtn={goToSecond}
                doThirdBtn={goToThird}
              />
            )}
            {isThird && (
              <CartConfirm
                doFirstBtn={goToFirst}
                doSecondBtn={goToSecond}
                doThirdBtn={goToThird}
              />
            )}
          </div>
        </div>
      </div>

      {/* 底下用8個換行空出footer距離 */}
      <br />
      <br />
      <br />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Cart;
