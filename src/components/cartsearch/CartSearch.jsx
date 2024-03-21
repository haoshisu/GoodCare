import React from "react";
import "./CartSearch.css";

const CartSearch = ({ FirstDone, SecondActive, SecondDone, ThirdActive, ThirdDone }) => {
  return (
    <>
      {/* 購物車流程條 */}
      <div className="CartSearch">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="h5 pt-4 pb-4 d-flex justify-content-evenly">
                <div
                  className={`step-item custom-step-item text-center active ${FirstDone? "visted":""}`}
                  data-index="1"
                >
                  <span>確認購物車</span>
                </div>

                <div
                  className={`step-item custom-step-item text-center ${SecondActive?"active":""} ${SecondDone? "visted":""}`}
                  data-index="2"
                >
                  <span>填寫收件及付款資訊</span>
                </div>

                <div
                  className={`step-item custom-step-item text-center ${ThirdActive?"active":""} ${ThirdDone? "visted":""}`}
                  data-index="3"
                >
                  <span>訂單確認</span>
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
