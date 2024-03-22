import React from "react";
import { useParams } from "react-router-dom";
import "./VideoSideBar.css";

function VideoSideBar({ dataList }) {
  const { id } = useParams();
  const title = "影音專區";
  const numberList = ["一", "二", "三", "四", "五", "六", "七"];

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-3 mt-3">
              <h1 style={{ color: "#a663c2a", fontWeight: "bold" }}>{title}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="col-2 ">
        <div className="w3-sidebar w3-bar-block w3-light-grey w3-card h-auto">
          {dataList.map((val, ind) => {
            return (
              <a
                href={`/video/${ind}`}
                className={`w3-bar-item w3-button w3-border-bottom ${
                  ind === parseInt(id) ? "active" : ""
                }`}
              >
                {`第${numberList[ind]}篇：${val.title}`}
              </a>
            );
          })}
          {/* <a href="/video/1" className="w3-bar-item w3-button w3-border-bottom">第二篇：長照服務對象有哪些</a>
          <a href="/video/2" className="w3-bar-item w3-button w3-border-bottom">第三篇：四包錢四包服務</a>
          <a href="/video/3" className="w3-bar-item w3-button w3-border-bottom">第四篇：失智照護服務</a>
          <a href="/video/4" className="w3-bar-item w3-button w3-border-bottom">第五篇：照顧觀念大翻轉</a>
          <a href="/video/5" className="w3-bar-item w3-button w3-border-bottom">第六篇：家庭照顧者支持服務</a>
          <a href="/video/6" className="w3-bar-item w3-button w3-border-bottom">第七篇：分享1966就是支持長照</a> */}
        </div>
      </div>

      <div className="col-1"></div>
    </React.Fragment>
  );
}

export default VideoSideBar;
