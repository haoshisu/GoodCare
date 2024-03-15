import React, { useState } from 'react';
import './SideBar.css';
import { NavLink } from 'react-router-dom';

function SideBar({ title }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
          <NavLink to="/news" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/news" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/news")}>最新消息</NavLink>
          <NavLink to="/policy" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/policy" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/policy")}>政府長照政策</NavLink>
          <NavLink to="/video" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/video" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/video")}>長照影音文章</NavLink>
          <NavLink to="/service" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/service" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/service")}>長照服務資訊</NavLink>
          <NavLink to="/subsidy" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/subsidy" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/subsidy")}>長照補助資訊</NavLink>
          <NavLink to="/map" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/map" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/map")}>長照據點地圖</NavLink>
          <NavLink to="/product" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/product" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/product")}>醫療輔具商品</NavLink>
          <NavLink to="/reserve" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/reserve" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/reserve")}>預約照服員</NavLink>
          <NavLink to="/webqa" className={`w3-bar-item w3-button ${activeLink === "/webqa" ? "active" : ""}`} onClick={(e) => handleLinkClick(e, "/webqa")}>網站常見問題</NavLink>
        </div>
      </div>
      <div className="col-1"></div>
    </React.Fragment>
  );
}

export default SideBar;