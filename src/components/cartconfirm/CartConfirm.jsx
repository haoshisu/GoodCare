import React from "react";
import "./CartConfirm.css";

const CartConfirm = () => {
  return (
    <>
      <div className="container col-9 mt-5">
        <h2
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "#cf4501" }}
        >
          完成訂購!
        </h2>
        <br />
        <div className="row">
          <div className="col">
            <h5 className="fw-bold">項次</h5>
          </div>
          <div className="col">
            <h5 className="fw-bold">商品名稱</h5>
          </div>
          <div className="col">
            <h5 className="fw-bold">單件價格</h5>
          </div>
          <div className="col">
            <h5 className="fw-bold">數量</h5>
          </div>
          <div className="col">
            <h5 className="fw-bold">小計</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col">1</div>
          <div className="col">行動拐杖</div>
          <div className="col">$800</div>
          <div className="col">1</div>
          <div className="col">$800</div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col">2</div>
          <div className="col">行動拐杖</div>
          <div className="col">$800</div>
          <div className="col">1</div>
          <div className="col">$800</div>
        </div>
        <br />
        <br />
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">商品總計：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>$1600</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">折扣：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>$100</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">運費：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>$0</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">合計：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>$1500</h5>
          </div>
        </div>
        <br /> <br /> <br />
        <div className="text-center">
          <button className="btn btn-lg custom-button px-5">
            <i className="fa-solid fa-shopping-cart"></i> 繼續購物
          </button>
        </div>
      </div>
    </>
  );
};

export default CartConfirm;
