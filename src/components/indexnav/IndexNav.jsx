import React, { useEffect, useState } from 'react';
import './IndexNav.css'

function IndexNav() {
  const [road, setRoad] = useState('./userlogin')
  const userData = localStorage.getItem('auth')

  useEffect(
    () => userData ? setRoad('./usermodify') : setRoad('./userlogin'),
    [userData]
  )

  return (

    <div>
      <nav className="navbar navbar-expand-lg topnav p-0">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" id="navbarScroll">
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>
                <li className="nav-item">
                  <a href="/news" className="topnav-title">最新消息</a>
                </li>
                <li class="nav-item dropdown ">
                  <div className="topnav-title">關於長照</div>
                  <ul class="dropdown-menu dropdown-content">
                    <li class="dropdown-content1">
                      <a href="/policy">政府長照政策</a>
                    </li>
                    <li className="dropdown-content1">
                      <a href="/video">長照影音文章</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/service" className="topnav-title">服務資訊</a>
                </li>
                <li className="nav-item">
                  <a href="/subsidy" className="topnav-title">補助資訊</a>
                </li>
                <li className="nav-item">
                  <a href="/map" className="topnav-title">長照據點地圖</a>
                </li>
                <li className="nav-item">
                  <a href="/product" className="topnav-title">醫療輔具商品</a>
                </li>
                <li className="nav-item">
                  <a href="/reserve" className="topnav-title">預約照服員</a>
                </li>
                <li className="nav-item">
                  <a href={road} className="topnav-title">會員資料</a>
                </li>
                <li className="nav-item">
                  <a href="/webqa" className="topnav-title">網站常見問題</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default IndexNav;
