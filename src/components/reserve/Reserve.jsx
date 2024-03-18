import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Reserve.css';

function handleCancelClick() {
  window.location.href = '/';
}

function Reserve() {
  const [applyname, setApplyname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('1');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [relationship, setRelationship] = useState('');
  const [servicelocation, setServicelocation] = useState('');
  const [medicalhistory, setMedicalhistory] = useState('');
  const [situation, setSituation] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // 將資料儲存在 sessionStorage 中
    sessionStorage.setItem('applyname', applyname);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('phone', phone);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('birthday', birthday);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('height', height);
    sessionStorage.setItem('weight', weight);
    sessionStorage.setItem('relationship', relationship);
    sessionStorage.setItem('servicelocation', servicelocation);
    sessionStorage.setItem('medicalhistory', medicalhistory);
    sessionStorage.setItem('situation', situation);


    // 跳轉
    navigate('/reserveconfirm');
  };

  return (
    <React.Fragment>
      <div className="appointment">
        <div className="row">

          <div className="col-6 col-md-4 col-lg-2"></div>

          <div className="col-6 col-md-4 col-lg-4">
            <h2>預約照服員資料表</h2>
            <form onSubmit={handleSubmit} id="formcontent">
              <p>申請人</p>
              <p>(主要聯絡人)</p>

              <div className="form-row">
                <label for="name"><i className="fa-solid fa-user"></i> 姓名：</label>
                <input type="text" id="applyname" name="applyname" value={applyname} onChange={(e) => setApplyname(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="email"><i className="fa-solid fa-envelope"></i> 信箱：</label>
                <input type="email" id="email" name="email" style={{ width: '80%' }} value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="phone"><i className="fa-solid fa-phone"></i> 電話：</label>
                <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <hr />
              <p>預約照顧</p>
              <p>(被照顧者資料)</p>
              <div className="form-row">
                <label for="name"><i className="fa-solid fa-user"></i> 姓名：</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="birthday"><i className="fa-solid fa-cake-candles"></i> 生日：</label>
                <input type="date" id="birthday" name="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="gender"><i className="fa-solid fa-bomb"></i> 性別：</label>
                <select id="gender" name="gender" value={gender}
                  onChange={(e) => setGender(e.target.value)}>
                  <option value="1">男</option>
                  <option value="0">女</option>
                </select>
              </div>
              <div className="form-row">
                <label for="height"><i className="fa-solid fa-thin fa-ruler"></i> 身高：</label>
                <input type="number" id="height" name="height" min="0" max="300" style={{ width: '135px' }} value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="weight"><i className="fa-solid fa-thin fa-weight-scale"></i> 體重：</label>
                <input type="number" id="weight" name="weight" min="0" max="300" style={{ width: '135px' }} value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="relationship"><i className="fa-solid fa-people-arrows"></i> 與被照顧者的關係：</label>
                <input type="text" id="relationship" name="relationship" style={{ width: '135px' }} value={relationship} onChange={(e) => setRelationship(e.target.value)} />
              </div>
              <div className="form-row">
                <label for="servicelocation"><i className="fa-solid fa-location-dot"></i> 服務地址：</label>
                <textarea id="servicelocation" name="servicelocation" rows="1" style={{ width: '100%' }} value={servicelocation} onChange={(e) => setServicelocation(e.target.value)}></textarea>
              </div>
              <div className="form-row">
                <i className=""></i>
                <i className=""></i>
                <label for="medicalhistory"><i className="fa-solid fa-book-medical"></i> 過去病史：</label>
                <textarea id="medicalhistory" name="medicalhistory" rows="3" maxLength="50" style={{ width: '100%' }} value={medicalhistory} onChange={(e) => setMedicalhistory(e.target.value)}></textarea>
              </div>
              <div className="form-row">
                <label for="situation"><i className="fa-solid fa-comment-dots"></i> 情況描述：</label>
                <textarea id="situation" name="situation" rows="6" maxLength="50" style={{ width: '100%' }} value={situation} onChange={(e) => setSituation(e.target.value)}></textarea>
              </div>
              <div className="button-container">
                <input type="button" className="cancel-button" onClick={handleCancelClick} value="取消" />
                <input type="submit" className="submit-button" value="預約" />
              </div>
            </form>
          </div>

          <div className="col-12 col-md-4 col-lg-6"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Reserve;
