import React from "react";
import "./CartSearch.css";

const CartSearch = ({ doFirstBtn, doSecondBtn, doThirdBtn }) => {
  return (
    <>
      {/* start of 搜尋框與購物車按鈕 */}
      {/* <div className="container mt-2">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-auto ms-auto">
              <div className="input-group search-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="找商品"
                />
                  <button className="btn btn-outline-secondary" type="button">
                    搜尋
                  </button>
              </div>
            </div>
            <div className="col-auto">
              <a href="/cart" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* 購物車流程條 */}
      <div className="CartSearch">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="h5 pt-4 pb-4 d-flex justify-content-evenly">
                <div
                  className="step-item custom-step-item text-center"
                  data-index="1"
                >
                  <span type="button" onClick={doFirstBtn}>確認購物車</span>
                </div>

                <div
                  className="step-item custom-step-item text-center"
                  data-index="2"
                >
                  <span type="button" onClick={doSecondBtn}>填寫收件及付款資訊</span>
                </div>

                <div
                  className="step-item custom-step-item text-center"
                  data-index="3"
                >
                  <span type="button" onClick={doThirdBtn} >訂單確認</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSearch;
