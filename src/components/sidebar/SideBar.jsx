import React, { useState } from 'react';
import './SideBar.css'

function SideBar({ title }) {
  const [flag, setFlag] = useState('news')

  const doVisit = (prop) => {
    setFlag(prop)
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-3 mt-3">
              <h1 style={{ color: "#663c2a", fontWeight: "bold" }}>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
          <div className="col-2">
            <div className="w3-sidebar w3-bar-block w3-light-grey w3-card h-auto">
              <a href="/news" type='button' onClick={ () => {doVisit('news')} } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'news'? "active":""}`}
              >
                最新消息
              </a>
              <a href="/policy" type='button' onClick={ () => {doVisit('policy')} } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'policy'? "active":""}`}
              >
                政府長照政策
              </a>
              <a href="/video" type='button' onClick={ () => {doVisit('video')} } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'video'? "active":""}`}
              >
                長照影音文章
              </a>
              <a href="/service" type='button' onClick={ () => doVisit('service') } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'service'? "active":""}`}
              >
                長照服務資訊
              </a>
              <a href="/subsidy" type='button' onClick={ () => doVisit('subsidy') } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'subsidy'? "active":""}`}
              >
                長照補助資訊
              </a>
              <a href="/map" type='button' onClick={ () => doVisit('map') } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'map'? "active":""}`}
              >
                長照據點地圖
              </a>
              <a href="/product" type='button' onClick={ () => doVisit('product') } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'product'? "active":""}`}
              >
                醫療輔具商品
              </a>
              <a href="/reserve" type='button' onClick={ () => doVisit('reserve') } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'reserve'? "active":""}`}
              >
                預約照服員
              </a>
              <a href="/webqa" type='button' onClick={ () => doVisit('webqa') } 
              className={`w3-bar-item w3-button w3-border-bottom ${flag === 'webqa'? "active":""}`}
              >
                網站常見問題
              </a>
            </div>
          </div>
      <div className="col-1"></div>
    </React.Fragment>
  );
}

export default SideBar;



