import React from "react";
import Header from "../header/Header";
import IndexNav from "../indexnav/IndexNav";
import PathBox from "../pathbox/PathBox";
import Footer from "../footer/Footer";
import BackToTopBtn from "../backtotopbtn/BackToTopBtn";
import "../../asset/css/subsidy.css";

const SubsidyLink2 = () => {
  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"補助資訊"} path={"/subsidy"} />
      <div className="container col-1"></div>
      <div className="container col-10">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>
              長照服務發展基金獎助作業要點及基準
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-10">
            <div className="content">
              {/* <h2>失智照護服務計畫申請作業須知</h2> */}
              <div className="outerBlock">
                <div className="center_block">
                  <section className="cp">
                    <p style={{ color: "#504E4E" }}>
                      為辦理長期照顧服務資源發展獎助辦法所定獎勵及補助事項，業訂有衛生福利部長照服務發展獎助作業要點，並依試用計畫類別及其範圍，訂有獎助經費申請、審查及財務處理及獎助項目。
                    </p>

                    <h3 style={{ color: "#504E4E", fontWeight: "bold" }}>
                      長照服務發展基金113年度一般性獎助計畫經費申請獎助項目及基準
                    </h3>

                    <ul>
                      <li>
                        1.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78120-d5be4eb6-98ee-45e7-8db0-9a9fa75b13f9.html"
                          title="PDF檔案下載"
                        >
                          長照服務發展基金113年度一般性獎助計畫經費申請獎助項目及基準函頒
                        </a>
                      </li>
                      <li>
                        2.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78121-ced8fa73-b7d9-4f26-8f57-077aca133ea5.html"
                          title="PDF檔案下載"
                        >
                          長照服務發展基金113年度一般性獎助計畫經費申請獎助項目及基準
                        </a>
                      </li>
                      <li>
                        3.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78123-2680dfae-5909-408e-8917-40ecce943171.html"
                          title="PDF檔案下載"
                        >
                          長照服務發展基金113年度一般性獎助計畫經費申請獎助項目及基準附錄
                        </a>
                      </li>
                      <li>
                        4.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-86971-f4759eff-4139-4f7d-af5f-8e7c71846b17.html"
                          title="WORD檔案下載"
                        >
                          113年度申請表
                        </a>
                      </li>
                      <li>
                        5.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-86972-c6430791-e7a6-4d77-bf9e-60b45f5ff648.html"
                          title="WORD檔案下載"
                        >
                          113年度一般性獎助計畫書格式及經費需求表範本
                        </a>
                      </li>
                      <li>
                        6.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-82640-ce35c41f-f6de-4522-b34d-b4bf6373a859.html"
                          title="PDF檔案下載"
                        >
                          長照服務發展基金獎助經費編列標準及使用範圍
                        </a>
                      </li>
                      <li>
                        7.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78119-58bd9b2b-efd5-4c30-8369-c9b17a88c852.html"
                          title="PDF檔案下載"
                        >
                          強化整備長期照顧服務行政人力資源人員進用薪級標準表
                        </a>
                      </li>
                      <li>
                        8.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-85765-41a81619-42c3-45e5-be04-2df1449272d4.html"
                        >
                          預防及延緩失能照護服務執行原則問答集
                        </a>
                      </li>
                    </ul>

                    <h3 style={{ color: "#504E4E", fontWeight: "bold" }}>
                      衛生福利部長照服務發展獎助作業要點
                    </h3>

                    <ul>
                      <li>
                        1.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78127-baef1000-b9ac-4cae-b840-e937638d5189.html"
                          target="_blank"
                          title="PDF檔下載"
                        >
                          衛生福利部長照服務發展獎助作業要點
                        </a>
                      </li>
                      <li>
                        2.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78128-34e02749-a015-45e8-9737-61585265f4a0.html"
                          title="ODT檔案下載"
                        >
                          一般性獎助計畫申請格式
                        </a>
                      </li>
                      <li>
                        3.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-82640-ce35c41f-f6de-4522-b34d-b4bf6373a859.html"
                          title="PDF檔案下載"
                        >
                          長照服務發展基金獎助經費編列標準及使用範圍
                        </a>
                      </li>
                      <li>
                        4.
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78130-81f27a2b-979b-4961-a448-e6026443cc79.html"
                        >
                          長照服務發展基金獎助計畫申請表
                        </a>
                      </li>
                      <li>
                        5.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78131-58549d34-69a9-4883-916a-f2eadeedd239.html"
                        >
                          政策性獎助計畫書申請格式
                        </a>
                      </li>
                      <li>
                        6.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78132-a960c863-c190-4354-b162-ded39a907a9c.html"
                        >
                          經費需求表(範本)
                        </a>
                      </li>
                      <li>
                        7.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-86357-105fd1ed-3e7b-4758-8b55-2bd6d0a6d2bc.html"
                        >
                          公職人員利益衝突迴避法第十四條第二項公職人員及關係人身分關係揭露表範本
                        </a>
                      </li>
                      <li>
                        8.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78133-357840eb-32e1-4de6-b73d-b1c3fb21a018"
                        >
                          長照服務發展基金獎勵優良事蹟表
                        </a>
                      </li>
                      <li>
                        9.&nbsp;
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-78134-82810e80-ee5e-48ca-b6d0-6bb9aeabd4e3"
                        >
                          長照服務基金計畫審查核定及請撥核銷作業流程圖
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
};
export default SubsidyLink2;
