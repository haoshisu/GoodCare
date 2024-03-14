import React from "react";
import "./CartDetail.css";

const CartDetail = () => {
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
            <tr>
              <td>
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product"
                  width="150"
                  height="150"
                />
              </td>
              <td>商品 A</td>
              <td>$100</td>
              <td>
                <div className="input-group input-group-sm">
                  <button
                    className="btn btn-outline-secondary quantity-btn btn-sm"
                    type="button"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control-sm"
                    style={{
                      fontSize: "14px",
                      padding: "0.375rem 0.75rem",
                      height: "auto",
                    }}
                    value="1"
                  />
                  <button
                    className="btn btn-outline-secondary quantity-btn btn-sm"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <select className="form-select">
                  <option value="0">0%</option>
                  <option value="0.1">10%</option>
                  <option value="0.2">20%</option>
                </select>
              </td>
              <td>$90</td>
              <td>
                <button className="delete-btn">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 折扣碼 */}
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
      {/* 帳單明細 */}
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
                <button type="button" className="btn btn-lg custom-button px-5">
                  前往結帳
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetail;
