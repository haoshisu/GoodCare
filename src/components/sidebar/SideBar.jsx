import React from 'react';
import './SideBar.css'

function SideBar({ title }) {

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
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
              <a href="/news" className="w3-bar-item w3-button w3-border-bottom category">最新消息</a>
              <a href="/policy" className="w3-bar-item w3-button w3-border-bottom">政府長照政策</a>
              <a href="/video" className="w3-bar-item w3-button w3-border-bottom">長照影音文章</a>
              <a href="/service" className="w3-bar-item w3-button w3-border-bottom">長照服務資訊</a>
              <a href="/subsidy" className="w3-bar-item w3-button w3-border-bottom">長照補助資訊</a>
              <a href="/map" className="w3-bar-item w3-button w3-border-bottom">長照據點地圖</a>
              <a href="/product" className="w3-bar-item w3-button w3-border-bottom">醫療輔具商品</a>
              <a href="/reserve" className="w3-bar-item w3-button w3-border-bottom">預約照服員</a>
              <a href="/webqa" className="w3-bar-item w3-button">網站常見問題</a>
            </div>
          </div>
      <div className="col-1"></div>
    </React.Fragment>
  );
}

export default SideBar;



