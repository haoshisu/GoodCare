// import React from "react";
import Header from "../../components/header/Header";
import IndexNav from "../../components/indexnav/IndexNav";
import PathBox from "../../components/pathbox/PathBox";
import Footer from "../../components/footer/Footer";
import BackToTopBtn from "../../components/backtotopbtn/BackToTopBtn";
import React, { useState } from "react";
import "../../asset/css/subsidy.css";

const Subsidy_Result = () => {
  const [activeContent, setActiveContent] = useState("content1");

  const showContent = (contentId) => {
    const contentBlocks = document.querySelectorAll(".content-block");
    contentBlocks.forEach((content) => {
      content.style.display = "none";
    });
    document.getElementById(contentId).style.display = "block";
    setActiveContent(contentId);
  };

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="btn-container">
              <button
                type="button"
                className={`btn btn-toggle ${
                  activeContent === "content1" ? "active" : ""
                }`}
                onClick={() => showContent("content1")}
              >
                照顧服務
              </button>
              <button
                type="button"
                className={`btn btn-toggle ${
                  activeContent === "content2" ? "active" : ""
                }`}
                onClick={() => showContent("content2")}
              >
                交通接送服務
              </button>
              <button
                type="button"
                className={`btn btn-toggle ${
                  activeContent === "content3" ? "active" : ""
                }`}
                onClick={() => showContent("content3")}
              >
                喘息服務
              </button>
              <button
                type="button"
                className={`btn btn-toggle ${
                  activeContent === "content4" ? "active" : ""
                }`}
                onClick={() => showContent("content4")}
              >
                輔具/居家無障礙服務
              </button>
              <button
                type="button"
                className={`btn btn-toggle ${
                  activeContent === "content5" ? "active" : ""
                }`}
                onClick={() => showContent("content5")}
              >
                住宿式機構服務
              </button>
            </div>
          </div>
          <div className="col-md-12">
            <div
              id="content1"
              className={`content-block ${
                activeContent === "content1" ? "active" : ""
              }`}
            >
              {/* 照顧服務内容 */}
            </div>
            <div
              id="content2"
              className={`content-block ${
                activeContent === "content2" ? "active" : ""
              }`}
            >
              {/* 交通接送服務内容 */}
            </div>
            <div
              id="content3"
              className={`content-block ${
                activeContent === "content3" ? "active" : ""
              }`}
            >
              {/* 喘息服務内容 */}
            </div>
            <div
              id="content4"
              className={`content-block ${
                activeContent === "content4" ? "active" : ""
              }`}
            >
              {/* 輔具/居家無障礙服務内容 */}
            </div>
            <div
              id="content5"
              className={`content-block ${
                activeContent === "content5" ? "active" : ""
              }`}
            >
              {/* 住宿式機構服務内容 */}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="./subsidy_Search1.html">
            <button type="button" className="btn btn-lg custom-button px-5">
              重新查詢
            </button>
          </a>
        </div>
      </div>

      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
};
export default Subsidy_Result;
