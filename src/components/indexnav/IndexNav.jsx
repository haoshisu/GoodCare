import './IndexNav.css'
import React from 'react';

function IndexNav() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg topnav p-0">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px;'}}>
              <li class="nav-item">
                <a href="/news" className="topnav-title">最新消息</a>
              </li>
              <li class="nav-item dropdown ">
                <div className="topnav-title">關於長照</div>
                <ul class="dropdown-menu dropdown-content">
                  <li class="dropdown-content1">
                    <a href="/policy">政府長照政策</a>
                  </li>
                  <li class="dropdown-content1">
                    <a href="/video">長照影音文章</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="/service" className="topnav-title">服務資訊</a>
              </li>
              <li class="nav-item">
                <a href="/subsidy" className="topnav-title">補助資訊</a>
              </li>
              <li class="nav-item">
                <a href="/map" className="topnav-title">長照據點地圖</a>
              </li>
              <li class="nav-item">
                <a href="/product" className="topnav-title">醫療輔具商品</a>
              </li>
              <li class="nav-item">
                <a href="/reserve" className="topnav-title">預約照服員</a>
              </li>
              <li class="nav-item">
                <a href="/userlogin" className="topnav-title">會員資料</a>
              </li>
              <li class="nav-item">
                <a href="/webqa" className="topnav-title">網站常見問題</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default IndexNav;
