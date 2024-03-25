import React, { useEffect } from "react";
import "./CartConfirm.css";

const CartConfirm = () => {
  const sessionData = sessionStorage.getItem('cartInfo')
  const sessionData2 = sessionStorage.getItem('couponDiscount')
  const cartInfo = sessionData? JSON.parse(sessionData):null
  const discount = sessionData2? parseFloat(sessionData2):1
  const charge = 100
  
  //calculate price
  const totalPrice = cartInfo.reduce((acc, val) => {
    const productTotal = val.price * val.quantity;
    return acc + productTotal;
  }, 0);

  const discountPrice = totalPrice*discount+charge

  useEffect(()=>{
    // 清除購物車跟折扣碼
    sessionStorage.setItem('cartInfo','')
    sessionStorage.setItem('couponDiscount','')
  })

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
          { cartInfo &&
              cartInfo.map((val,ind)=>{
                return(
                  <div className="row border-bottom pb-2 mb-2" key={ ind }>
                    <div className="col">{ ind+1 }</div>
                    <div className="col">{ val.productName }</div>
                    <div className="col">{ 'NTD$ '+ val.price }</div>
                    <div className="col">{ val.quantity }</div>
                    <div className="col">{ 'NTD$ '+ val.price*val.quantity }</div>
                  </div>
                )
              })
          }

        <br />
        <br />
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">商品總計：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ 'NTD$ '+ totalPrice }</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">折扣：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ 'NTD$ '+ parseInt(totalPrice-(discountPrice-charge)) }</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">運費：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ 'NTD$ '+ charge }</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">合計：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ 'NTD$ '+ parseInt(discountPrice) }</h5>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <a href="/product">
            <button className="btn btn-lg custom-button px-5">
              <i className="fa-solid fa-shopping-cart"></i> 繼續購物
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default CartConfirm;
