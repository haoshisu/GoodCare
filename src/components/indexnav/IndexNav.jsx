import './IndexNav.css'
import React from 'react';

function IndexNav() {

  return (
    <div className="topnav">
        <a href="/news" className="topnav-title">最新消息</a>
        <div className="dropdown">
            <a href="/video"className="topnav-title">關於長照</a>
            <div className="dropdown-content">
                <div className="dropdown-content1">
                    <a href="/policy">政府長照政策</a>
                    <a href="/video">長照影音文章</a>
                </div>
            </div>
        </div>
        <a href="/service" className="topnav-title">服務資訊</a>
        <a href="/subsidy" className="topnav-title">補助資訊</a>
        <a href="/map" className="topnav-title">長照據點地圖</a>
        <a href="/product" className="topnav-title">醫療輔具商品</a>
        <a href="/reserve" className="topnav-title">預約照服員</a>
        <a href="/userlogin" className="topnav-title">會員資料</a>
        <a href="/webqa" className="topnav-title">網站常見問題</a>
    </div>
  );
}

export default IndexNav;
