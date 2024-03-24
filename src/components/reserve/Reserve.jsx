import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Reserve.css';

function handleCancelClick() {
  window.location.href = '/reserve';
}

function Reserve() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const formDataFromLocation = location.state && location.state.formData;
  const [formData, setFormData] = useState(formDataFromLocation || {});

  const onSubmit = (data) => {
    // 將數據做為參數傳到第二頁
    navigate('/reserveconfirm', { state: { formData: data } });
  };

  return (
    <React.Fragment>
      <div className="appointment">
        <div className="row">
          <div className="col-sm-1 col-xl-2"></div>
          <div className="col-sm-8 col-md-8 col-lg-6 col-xl-5">
            <br />
            <form onSubmit={handleSubmit(onSubmit)} id="formcontent">
              <h2>預約照服員資料表</h2>
              <hr />
              <h4>申請人&nbsp;&nbsp;(主要聯絡人)</h4>
              <div className="form-row">
                <label for="name"><p><i className="fa-solid fa-user"></i> 姓名：</p></label>
                <input type="text" id="applyname" name="applyname"
                  {...register("applyname", {
                    required: "* 此欄位必填",
                    pattern: {
                      value: /^[\u4E00-\u9FA5]+$/,
                      message: "請輸入中文姓名"
                    }
                  })} defaultValue={formData.applyname} />
                {errors.applyname && <p style={{ color: 'red' }}>{errors.applyname.message}</p>}
              </div>
              <div className="form-row">
                <label for="email"><p><i className="fa-solid fa-envelope"></i> 信箱：</p></label>
                <input type="email" id="email" name="email" style={{ width: '80%' }} {...register("email", {
                  required: "* 此欄位必填",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "請輸入有效信箱"
                  }
                })} defaultValue={formData.email} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
              </div>
              <div className="form-row">
                <label for="phone"><p><i className="fa-solid fa-phone"></i> 行動電話：</p></label>
                <input type="tel" id="phone" name="phone" {...register("phone", {
                  required: "* 此欄位必填",
                  pattern: {
                    value: /^09\d{8}$/,
                    message: "請輸入正確電話格式"
                  }
                })} defaultValue={formData.phone} />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
              </div>
              <div className="form-row">
                <label for="relationship"><p><i className="fa-solid fa-people-arrows"></i> 與被照顧者的關係：</p></label>
                <input type="text" id="relationship" name="relationship" style={{ width: '135px' }} {...register("relationship", {
                  required: "* 此欄位必填",
                  pattern: {
                    value: /^[\u4E00-\u9FA5]+$/,
                    message: "請輸入中文姓名"
                  }
                })} defaultValue={formData.relationship} />
                {errors.relationship && <p style={{ color: 'red' }}>{errors.relationship.message}</p>}
              </div>
              <br />
              <hr />
              <h4>預約照顧&nbsp;&nbsp;(被照顧者資料)</h4>
              <div className="form-row">
                <label for="name"><p><i className="fa-solid fa-user"></i> 姓名：</p></label>
                <input type="text" id="name" name="name" {...register("name", { required: "* 此欄位必填" })} defaultValue={formData.name} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
              </div>
              <div className="form-row">
                <label for="birthday"><p><i className="fa-solid fa-cake-candles"></i> 生日：</p></label>
                <input type="date" id="birthday" name="birthday" {...register("birthday", { required: "* 此欄位必填" })} defaultValue={formData.birthday} />
                {errors.birthday && <p style={{ color: 'red' }}>{errors.birthday.message}</p>}
              </div>
              <div className="form-row">
                <label htmlFor="gender"><p><i className="fa-solid fa-bomb"></i> 性別：</p></label>
                <select id="gender" name="gender"  {...register("gender")} defaultValue={formData.gender} >
                  <option value="" disabled hidden></option>
                  <option value="1">男</option>
                  <option value="0">女</option>
                </select>
              </div>
              <div className="form-row">
                <label for="height"><p><i className="fa-solid fa-thin fa-ruler"></i> 身高：</p></label>
                <input type="number" id="height" name="height" min="0" max="300" style={{ width: '135px' }} {...register("height", { required: "* 此欄位必填" })} defaultValue={formData.height} />
                {errors.height && <p style={{ color: 'red' }}>{errors.height.message}</p>}
              </div>
              <div className="form-row">
                <label for="weight"><p><i className="fa-solid fa-thin fa-weight-scale"></i> 體重：</p></label>
                <input type="number" id="weight" name="weight" min="0" max="300" style={{ width: '135px' }} {...register("weight", { required: "* 此欄位必填" })} defaultValue={formData.weight} />
                {errors.weight && <p style={{ color: 'red' }}>{errors.weight.message}</p>}
              </div>

              <div className="form-row">
                <label for="servicelocation"><p><i className="fa-solid fa-location-dot"></i> 服務地址：</p></label>
                <input id="servicelocation" name="servicelocation" rows="1" style={{ width: '100%' }} {...register("servicelocation", { required: "* 此欄位必填" })} defaultValue={formData.servicelocation}></input>
                {errors.servicelocation && <p style={{ color: 'red' }}>{errors.servicelocation.message}</p>}
              </div>
              <div className="form-row">
                <i className=""></i>
                <i className=""></i>
                <label for="medicalhistory"><p><i className="fa-solid fa-book-medical"></i> 過去病史：</p></label>
                <textarea id="medicalhistory" name="medicalhistory" rows="3" maxLength="1000" style={{ width: '100%' }} {...register("medicalhistory", { required: "* 此欄位必填" })} defaultValue={formData.medicalhistory}></textarea>
                {errors.medicalhistory && <p style={{ color: 'red' }}>{errors.medicalhistory.message}</p>}
              </div>
              <div className="form-row">
                <label for="situation"><p><i className="fa-solid fa-comment-dots"></i> 情況描述：</p></label>
                <textarea id="situation" name="situation" rows="6" maxLength="1000" style={{ width: '100%' }} {...register("situation", { required: "* 此欄位必填" })} defaultValue={formData.situation}></textarea>
                {errors.situation && <p style={{ color: 'red' }}>{errors.situation.message}</p>}
              </div>
              <div className="button-container">
                <input type="button" className="cancel-button" onClick={handleCancelClick} value="取消" />
                <input type="submit" className="submit-button" value="預約" />
              </div>
            </form>
            <br />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Reserve;
