import React from 'react';
import './VideoSideBar.css'

function SideBar({ title }) {

  return (   
    <React.Fragment>
      <div className="container">
        <div className="row">
            <div className="col-2">
                <div className="mb-3 mt-3">
                    <h1 style={{color:"#a663c2a",fontWeight: "bold"}}>
                        { title }
                    </h1>
                </div>
            </div>
        </div>
      </div>

      <div className="col-2">
        <div className="w3-sidebar w3-bar-block w3-light-grey w3-card h-auto">
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom category">{'第一篇：政府為什麼要推動長照'}</a>
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom">第二篇：長照服務對象有哪些</a>
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom">第三篇：四包錢四包服務</a>
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom">第四篇：失智照護服務</a>
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom">第五篇：照顧觀念大翻轉</a>
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom">第六篇：家庭照顧者支持服務</a>
          <a href="#a" className="w3-bar-item w3-button w3-border-bottom">第七篇：分享1966就是支持長照</a>
        </div>
      </div>
      
      <div className="col-1"></div>
    </React.Fragment>
  );
}

export default SideBar;



