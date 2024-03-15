import React from "react";
import "./CartPayment.css";

const CartPayment = ( { doFirstBtn, doThirdBtn } ) => {
  return (
    <>
      <div className="container">
        <div className="row">
      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <i className="fas fa-shipping-fast"></i>&nbsp;
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                運送方式（宅配到府）
              </h5>
            </div>
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="請填寫您的姓名"
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  聯絡電話
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="請填寫您的聯絡電話"
                />
              </div>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <label for="city" className="form-label">
                    縣市
                  </label>
                  <select id="city" className="form-select">
                    <option value="">請選擇縣市</option>
                    <option value="">台北市</option>
                    <option value="">台中市</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="district" className="form-label">
                    地區
                  </label>
                  <select id="district" className="form-select">
                    <option value="">請選擇地區</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">
                  詳細地址
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="3"
                  placeholder="請填寫完整的地址"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              <i className="fas fa-user"></i>&nbsp;訂購人資料
            </h5>
            <form>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="sameAsShipping"
                />
                <label className="form-check-label" for="sameAsShipping">
                  訂購人資料同收件人資料
                </label>
              </div>
              <div className="mb-3">
                <label for="name" className="form-label">
                  姓名
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="請填寫您的姓名"
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  聯絡電話
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="請填寫您的聯絡電話"
                />
              </div>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <label for="city" className="form-label">
                    縣市
                  </label>
                  <select id="city" className="form-select">
                    <option value="">請選擇縣市</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label for="district" className="form-label">
                    地區
                  </label>
                  <select id="district" className="form-select">
                    <option value="">請選擇地區</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">
                  詳細地址
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows="3"
                  placeholder="請填寫完整的地址"
                ></textarea>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  電子郵件
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="請填寫您的電子郵件"
                />
              </div>
              <div className="mb-3">
                <label for="paymentMethod" className="form-label">
                  付款方式
                </label>
                <select id="paymentMethod" className="form-select">
                  <option value="creditCard">信用卡</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="creditCardNumber" className="form-label">
                  信用卡號碼
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="creditCardNumber"
                  placeholder="請填寫信用卡號碼"
                />
              </div>
              <div className="mb-3 row">
                <div className="col-md-6">
                  <label for="expiryDate" className="form-label">
                    到期日期
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-md-6">
                  <label for="securityCode" className="form-label">
                    安全碼
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="securityCode"
                    placeholder="請填寫信用卡安全碼"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-md-4 text-center">
              <a href="#a">
                <button
                  className="btn btn-lg custom-button-back px-5" onClick={ doFirstBtn }
                >
                  返回購物車
                </button>
              </a>
            </div>
            <div className="col-md-4 text-center">
                <button type="button" className="btn btn-lg custom-button px-5" onClick={ doThirdBtn }>
                  確認結帳
                </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default CartPayment;
