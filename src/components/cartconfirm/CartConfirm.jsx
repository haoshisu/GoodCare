import React from "react";
import "./CartConfirm.css";

const CartConfirm = () => {
  const cartInfo = JSON.parse(sessionStorage.getItem('cartInfo')) || []
  const discount = parseFloat(sessionStorage.getItem('couponDiscount'))|| 1
  const charge = 100
  
  //calculate price
  const totalPrice = cartInfo.reduce((acc, val) => {
    const productTotal = val.price * val.quantity;
    return acc + productTotal;
  }, 0);

  const discountPrice = totalPrice*discount+charge

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
                  <div className="row border-bottom pb-2 mb-2">
                    <div className="col">{ ind+1 }</div>
                    <div className="col">{ val.productName }</div>
                    <div className="col">{ val.price }</div>
                    <div className="col">{ val.quantity }</div>
                    <div className="col">{ val.price*val.quantity }</div>
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
            <h5>{ totalPrice }</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">折扣：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ totalPrice-(discountPrice-charge) }</h5>
          </div>
        </div>
        <div className="row border-bottom pb-2 mb-2">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">運費：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ charge }</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <h5 className="fw-bold">合計：</h5>
          </div>
          <div className="col-4"></div>
          <div className="col-5">
            <h5>{ discountPrice }</h5>
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
