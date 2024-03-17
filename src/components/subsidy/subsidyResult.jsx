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
              <div id="content1" className="content-block">
                <h3 className="text-center">照顧服務</h3>
                <div className="container-fluid">
                  <table className="table table-striped custom-table">
                    <thead className="thead-dark">
                      <tr>
                        <th className="text-center col m-line">項目</th>
                        <th className="text-center col">資訊</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center m-line">您的收入狀況為</td>
                        <td className="text-center" id="income">
                          一般戶
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">政府補貼</td>
                        <td className="text-center" id="subsidy">
                          84% 的照顧項目支出
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 失能等級 */}
                <div className="container-fluid">
                  <table className="table table-striped custom-table">
                    <thead className="thead-dark">
                      <tr>
                        <th className="text-center col m-line">失能等級</th>
                        <th className="text-center col">每月補助最高金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center m-line">第2級</td>
                        <td className="text-center" id="income">
                          NTD$ 10,020
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">第3級</td>
                        <td className="text-center" id="subsidy">
                          NTD$ 15,460
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">第4級</td>
                        <td className="text-center" id="level">
                          NTD$ 18,580
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">第5級</td>
                        <td className="text-center" id="price">
                          NTD$ 24,100
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">第6級</td>
                        <td className="text-center" id="price">
                          NTD$ 28,070
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">第7級</td>
                        <td className="text-center" id="price">
                          NTD$ 32,090
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">第8級</td>
                        <td className="text-center" id="price">
                          NTD$ 36,180
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
          <a href="/subsidy_Search1">
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
