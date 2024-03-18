// import React from "react";
import Header from "../header/Header";
import IndexNav from "../indexnav/IndexNav";
import PathBox from "../pathbox/PathBox";
import Footer from "../footer/Footer";
import BackToTopBtn from "../backtotopbtn/BackToTopBtn";
import React, { useState } from "react";
import "../../asset/css/subsidy.css";
import { Link } from "react-router-dom";

const Subsidy_Result = ({ goToFirst }) => {
  const [activeContent, setActiveContent] = useState("content1");

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };
  // Result的內部分頁
  // const Result = () => {
  //   const [isCare, setIsCare] = useState(true); //照顧服務
  //   const [isVehicle, setIsVehicle] = useState(false); //交通接送
  //   const [isBreak, setIsBreak] = useState(false); //喘息服務
  //   const [isThird, setIsAidTool] = useState(false); //輔具/居家無障礙服務
  //   const [isNoMatch, setIs] = useState(false); //住宿式機構服務
  // end of Result的內部分頁

  return (
    <React.Fragment>
      <div className="container col-1"></div>
      <div className="container col-10">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>
              長照服務補助資訊專區- 查詢結果
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-10">
            <div className="content">
              <h3 style={{ color: "#cf4501", fontWeight: "bold" }}>
                您的補助查詢結果:
              </h3>
              <p></p>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-12">
                    {/* 按钮组 */}
                    <div className="btn-container">
                      <button
                        type="button"
                        className="btn btn-toggle"
                        onClick={() => showContent("content1")}
                      >
                        照顧服務
                      </button>
                      <button
                        type="button"
                        className="btn btn-toggle"
                        onClick={() => showContent("content2")}
                      >
                        交通接送服務
                      </button>
                      <button
                        type="button"
                        className="btn btn-toggle"
                        onClick={() => showContent("content3")}
                      >
                        喘息服務
                      </button>
                      <button
                        type="button"
                        className="btn btn-toggle"
                        onClick={() => showContent("content4")}
                      >
                        輔具/居家無障礙服務
                      </button>
                      <button
                        type="button"
                        className="btn btn-toggle"
                        onClick={() => showContent("content5")}
                      >
                        住宿式機構服務
                      </button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/* 下方顯示內容 */}
                    <div id="content1" className="content-block">
                      <h3 className="text-center">照顧服務</h3>
                      <div className="container-fluid">
                        <table className="table table-striped custom-table ">
                          <thead className="thead-dark">
                            <tr>
                              <th className="text-center col m-line">項目</th>
                              <th className="text-center col">資訊</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center m-line ">
                                您的收入狀況為
                              </td>
                              <td className="text-center " id="income">
                                一般戶
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center m-line ">政府補貼</td>
                              <td className="text-center " id="subsidy">
                                84% 的照顧項目支出
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* 失能等級  */}
                      <div className="container-fluid">
                        <table className="table table-striped custom-table">
                          <thead className="thead-dark">
                            <tr>
                              <th className="text-center col m-line">
                                失能等級
                              </th>
                              <th className="text-center col">
                                每月補助最高金額
                              </th>
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
                      {/* end of失能等级 */}
                    </div>
                    <div id="content2" className="content-block">
                      <h3 className="text-center">交通接送服務</h3>
                      <div className="container-fluid">
                        <table className="table table-striped custom-table ">
                          <thead className="thead-dark">
                            <tr>
                              <th className="text-center col m-line">項目</th>
                              <th className="text-center col">資訊</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center m-line ">
                                您的收入狀況為
                              </td>
                              <td className="text-center " id="income">
                                一般戶
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center m-line ">
                                政府補貼每趟
                              </td>
                              <td className="text-center " id="subsidy">
                                補助金額之70%
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center m-line">
                                每月補助最高額度 (NTD)
                              </td>
                              <td className="text-center " id="level">
                                NTD$ 1680
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="content3" className="content-block">
                      <h3 className="text-center">喘息服務</h3>
                      <div className="container-fluid">
                        <table className="table table-striped custom-table ">
                          <thead className="thead-dark">
                            <tr>
                              <th className="text-center col m-line">項目</th>
                              <th className="text-center col">資訊</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center m-line ">
                                您的收入狀況為
                              </td>
                              <td className="text-center " id="income">
                                一般戶
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center m-line ">政府補貼</td>
                              <td className="text-center " id="subsidy">
                                84% 的照顧項目支出
                              </td>
                            </tr>
                            {/* 失能等級  */}
                            <div className="container-fluid">
                              <table className="table table-striped custom-table">
                                <thead className="thead-dark">
                                  <tr>
                                    <th className="text-center col m-line">
                                      失能等級
                                    </th>
                                    <th className="text-center col">
                                      每月補助最高金額
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="text-center m-line">
                                      第2級
                                    </td>
                                    <td className="text-center" id="income">
                                      NTD$ 10,020
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-center m-line">
                                      第3級
                                    </td>
                                    <td className="text-center" id="subsidy">
                                      NTD$ 15,460
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-center m-line">
                                      第4級
                                    </td>
                                    <td className="text-center" id="level">
                                      NTD$ 18,580
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-center m-line">
                                      第5級
                                    </td>
                                    <td className="text-center" id="price">
                                      NTD$ 24,100
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-center m-line">
                                      第6級
                                    </td>
                                    <td className="text-center" id="price">
                                      NTD$ 28,070
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-center m-line">
                                      第7級
                                    </td>
                                    <td className="text-center" id="price">
                                      NTD$ 32,090
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="text-center m-line">
                                      第8級
                                    </td>
                                    <td className="text-center" id="price">
                                      NTD$ 36,180
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            {/* end of失能等级 */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div id="content4" className="content-block">
                      <h3 className="text-center">輔具/居家無障礙服務</h3>
                      <div className="container-fluid">
                        <table className="table table-striped custom-table ">
                          <thead className="thead-dark">
                            <tr>
                              <th className="text-center col m-line">項目</th>
                              <th className="text-center col">資訊</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center m-line ">
                                您的收入狀況為
                              </td>
                              <td className="text-center " id="income">
                                一般戶
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center m-line ">
                                政府補貼每趟
                              </td>
                              <td className="text-center " id="subsidy">
                                補助金額之70%
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      id="content5"
                      className="content-block"
                      style={{ border: "1px dashed #000" }}
                    >
                      <h3 className="text-center">住宿式機構服務</h3>
                      <p>
                        &emsp;&emsp;&emsp;&emsp;
                        為緩解中、重度失能者使用機構式服務之家庭經濟負荷，本部自108年起辦理「住宿式服務機構使用者補助方案」，針對入住指定7類機構且所得稅額未達20%之住民，依稅率級距給予最高每人每年6萬元之補助；自112年起，針對長照需要等級達4級以上之住民，調增補助為每人每年12萬元，並取消排富規定。{" "}
                        <br />
                        <br /> * *附上健保卡查詢補助資訊步驟流程圖 附件檔案:{" "}
                        <a
                          href="https://www.mohw.gov.tw/dl-78215-8ef96295-ecec-47c9-bb4f-d51a1b804752.html"
                          style={{ color: "blue" }}
                        >
                          下載
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button
          className="btn btn-lg custom-button px-5 mr-2"
          onClick={goToFirst}
        >
          重新查詢
        </button>
      </div>
    </React.Fragment>
  );
};
export default Subsidy_Result;
