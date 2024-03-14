import React from "react";
import "./CartSearch.css";

const CartSearch = () => {
  return (
    <>
      {/* start of 搜尋框與購物車按鈕 */}
      <div className="container mt-2">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-auto ms-auto">
              {/* // 搜尋框 */}
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
              {/* // 購物車連結 */}
              <a href="#a" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* 購物車流程條 */}
      <div className="container justify-content-center ">
        <div className="row justify-content-center">
          <div className="push-right"></div>
          <div className="row">
            <div className="col-6 pt-4 pb-4">
              <div className="h5 justify-content-center">
                <div
                  className="step-item custom-step-item text-center"
                  data-index="1"
                >
                  <a href="#a">確認購物車</a>
                </div>

                <div
                  className="step-item custom-step-item text-center"
                  data-index="2"
                >
                  <a href="#a">填寫收件及付款資訊</a>
                </div>

                <div
                  className="step-item custom-step-item text-center"
                  data-index="3"
                >
                  <a href="#a">訂單確認</a>
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
