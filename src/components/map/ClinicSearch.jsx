import React, { useEffect, useState } from 'react'

import axios from 'axios';

function Mapsearch() {
  const [clinics, setClinics] = useState([]);
  // const [city, setCity] = useState('');
  // const [district, setDistrict] = useState('');
  // const [keyword, setKeyword] = useState('');

  const getClinics = async () => {
    const response = await axios.get('http://localhost:8000/clinic')
    console.log(response);
    setClinics(response.data)
  }

  useEffect(() => {
    getClinics();
  }, []);

  return (
    <React.Fragment>
      <div className="search-container">
        <div className="box">
          據點地圖查詢
        </div>
        <input type="text" className="serchtext" maxLength="3" placeholder="請輸入縣市 (例如：臺北市)" />
        <input type="text" className="serchtext" maxLength="3" placeholder="請輸入地區 (例如：大安區)" />
        <input type="text" className="serchtext1" placeholder="請輸入機構關鍵字" />
        <button type="submit" className="serchbutton"><i className="fas fa-search"></i></button>
      </div>
      <table className='stronghold'>
        <thead>
          <tr>
            <th>屬性</th>
            <th>診所名稱</th>
            <th>地址</th>
            <th>電話</th>
          </tr>
        </thead>
        <tbody>
          {clinics.map((clinic) => (
            <tr key={clinic.id}>
              <td>{clinic.id}</td>
              <td>{clinic.name}</td>
              <td>{clinic.address}</td>
              <td>{clinic.tel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Mapsearch
