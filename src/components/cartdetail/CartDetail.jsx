import React from "react";
import "./CartDetail.css";

import toast, { Toaster } from 'react-hot-toast';
import Counter from "../Counter/counter";

const CartDetail = ( { doSecondBtn } ) => {
  let cartInfo = JSON.parse(sessionStorage.getItem('cartInfo'))
  // console.log(cartInfo)
  const notify = () => toast.success('購物車尚未有任何東西！')
  if(!cartInfo) notify()

  return (
    <>
      {/* 購物車明細 */}
      <div className="container justify-content-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">商品圖片</th>
              <th scope="col">商品名稱</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">折扣</th>
              <th scope="col">小計</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            {cartInfo? cartInfo.map((val,ind)=>{
              return(
                <tr>
                  <td>
                      <img
                      src={require(`../../asset/images/numberImages/${val.id}.png`)}
                      alt="Product"
                      width="150"
                      height="150"
                    />
                  </td>
                  <td>
                    { val.productName }
                  </td>
                  <td>
                    { val.price }
                  </td>
                  <td>
                    <Counter />
                  </td>
                  <td>
                    <select className="form-select">
                      <option value="0">0%</option>
                      <option value="0.1">10%</option>
                      <option value="0.2">20%</option>
                    </select>
                  </td>
                  <td>
                    總價還沒計算
                  </td>
                </tr>
              )
            })
            :<tr><td colSpan={ 7 } className="text-muted text-center"> 您尚未加入任何東西到購物車 </td></tr>
            }     
          </tbody>
        </table>
      </div>

      {/* 折扣碼 */}
      {cartInfo &&
        <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="請輸入折扣碼"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-outline-primary" type="button">
                  使用折扣碼
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        </div>
      }
      {/* 帳單明細 */}
      {cartInfo &&
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
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>折扣</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>運費</td>
                    <td>$0.00</td>
                  </tr>
                  <tr>
                    <td>合計</td>
                    <td>$0.00</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <div className="text-center">
                  <button type="button" className="btn btn-lg custom-button px-5" onClick={ doSecondBtn }>
                    前往結帳
                  </button>
              </div>
            </div>
          </div>
        </div>
      }
      {/* 叫他回去買東西 */}
      {!cartInfo &&
        <div className="grid text-center">
          <a href="/product">
            <button className="btn btn-lg custom-button px-5 g-start-2">
              <i className="fa-solid fa-shopping-cart"></i> 繼續購物
            </button>
          </a>
          <Toaster position="top-right" reverseOrder={false}/>
        </div>

      }
    </>
  );
};

export default CartDetail;
