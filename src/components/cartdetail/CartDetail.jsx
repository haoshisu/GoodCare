import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form"
import "./CartDetail.css";
import Counter from "../Counter/counter";

const CartDetail = ({ doSecondBtn }) => {
  let sessionInfo = JSON.parse(sessionStorage.getItem("cartInfo"));
  const [ cartInfo, setCartInfo ] = useState(sessionInfo||[]);
  const [ couponInd, setCouponInd ] = useState(0);
  const [ userCoupon, setUserCoupon ] = useState(null);
  
  console.log(userCoupon)
  // 更新購物車資訊
  const changeCartInfo = (id, num) => {
    const updatedCartInfo = cartInfo.map(item => {
      if (item.id === id) {
        return { ...item, quantity: num };
      }
      return item;
    });
    setCartInfo(updatedCartInfo);
  };
  
  // 跳出吐司提示
  const notify = (msg) => toast.success(msg);
  if (!cartInfo.length) notify("購物車尚未有任何東西！");
  if (userCoupon) notify("使用折扣碼成功！")
  
  // 驗證折扣碼
  let realCoupon = [
    { code: "GC2024", discount: 0.85 },
    { code: "GodRex", discount: 0.7}
  ];
  const { register, handleSubmit } = useForm();
  const onSubmit = e => {
    let checkInd = realCoupon.findIndex(i=>i.code===e.code)
    if (checkInd>=0) setUserCoupon(realCoupon[checkInd].discount)
    console.log(e.code)
  }
  const checkCoupon = e => {
    let checkInd = realCoupon.findIndex(i=>i.code===e.target.value)
    setCouponInd(checkInd)
    console.log("coupon id:",couponInd)
  }

  
  // 計算總金額
  let cartPrice = 0;
  let charge = 100;
  let totalDiscount = 0;
  let totalPrice = 0;


  cartPrice = cartInfo.length>0
    ? cartInfo.reduce((total,item)=>{
      return total + item.quantity*item.price
    },0)
    :0
  totalPrice =
    userCoupon
      ? cartPrice * userCoupon + charge
      : cartPrice + charge;
  totalDiscount = totalPrice - cartPrice - charge;

  return (
    <>
      {/* 購物車明細 */}
      <div className="container justify-content-center">
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th scope="col">商品圖片</th>
              <th scope="col">商品名稱</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            {cartInfo.length>0 ? (
              cartInfo.map( val => {
                return (
                  <tr key={ val.id }>
                    <td>
                      <img
                        src={require(`../../asset/images/numberImages/${val.id}.png`)}
                        alt="Product"
                        width="150"
                        height="150"
                      />
                    </td>
                    <td>{val.productName}</td>
                    <td>{val.price}</td>
                    <td>
                      <Counter 
                      curNum={ val.quantity } 
                      childToParent={ numChanged => {changeCartInfo(val.id, numChanged)} }
                      />
                    </td>
                    <td>{ val.quantity*val.price }</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-muted text-center">
                  {" "}
                  您尚未加入任何東西到購物車{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 折扣碼 */}
      {cartInfo.length>0 && (
        <div className="container">
          <div className={ couponInd<0? "block":"d-none"} >
            <p className="text-danger">此折扣碼無效</p>
          </div>
          <div className="justify-content-center">
          <div className="col-6">
              <form className="input-group" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="請輸入折扣碼"
                  {...register('code',
                    {
                      require:true,
                      pattern:'^/w+$',
                      maxLength:6
                    }
                  )}
                  onChange={ checkCoupon }
                />
                <div className="input-group-append">
                  <input type="submit" 
                  className="btn btn-outline-primary" 
                  value="使用折扣碼"
                  />
                </div>
              </form>
          </div>
          </div>
          <Toaster />
        </div>
      )}
      {/* 帳單明細 */}
      {cartInfo.length>0 && (
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <h2 className="my-4 text-center" style={{ fontWeight: "bold" }}>
                訂單資訊
              </h2>
              <table className="table">
                <tbody>
                  <tr>
                    <td>商品小計</td>
                    <td>{"NT$" + cartPrice}</td>
                  </tr>
                  <tr>
                    <td>折扣</td>
                    <td className={totalDiscount < 0 ? "text-danger" : ""}>
                      {"NT$" + totalDiscount}
                    </td>
                  </tr>
                  <tr>
                    <td>運費</td>
                    <td>{"NT$" + charge}</td>
                  </tr>
                  <tr>
                    <td>合計</td>
                    <td>{"NT$" + totalPrice}</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-lg custom-button px-5"
                  onClick={doSecondBtn}
                >
                  前往結帳
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 叫他回去買東西 */}
      {cartInfo.length===0 && (
        <div className="grid text-center">
          <a href="/product">
            <button className="btn btn-lg custom-button px-5 g-start-2">
              <i className="fa-solid fa-shopping-cart"></i> 繼續購物
            </button>
          </a>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      )}
    </>
  );
};

export default CartDetail;
