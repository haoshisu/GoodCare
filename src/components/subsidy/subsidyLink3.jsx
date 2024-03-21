import React from "react";
import Header from "../header/Header";
import IndexNav from "../indexnav/IndexNav";
import PathBox from "../pathbox/PathBox";
import Footer from "../footer/Footer";
import BackToTopBtn from "../backtotopbtn/BackToTopBtn";
import "../../asset/css/subsidy.css";

const SubsidyLink3 = () => {
  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"補助資訊"} path={"/subsidy"} />
      <div className="container col-1"></div>
      <div className="container col-10">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>失智照護服務計畫申請作業須知</h1>
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
                      對於疑似失智或失智未失能者，為提升失智照護之服務量能，本部自106推動「失智照護計畫」，布建「失智共同照護中心」進行協助確診、個案服務、轉介諮詢等服務；以及布建「失智社區服務據點」辦理認知功能促進、共餐及社會參與等預防延緩失能/失智服務項目。
                    </p>
                    <h3 style={{ color: "#504E4E", fontWeight: "bold" }}>
                      附件下載
                    </h3>
                  </section>
                  <div className="list">
                    <ul className="download">
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-87062-8e30cd6d-386c-400f-bf89-ebe509043e47.html"
                          title="(檔案下載)113年失智照護服務計畫申請作業須知.pdf"
                        >
                          113年失智照護服務計畫申請作業須知.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-81684-6144de06-3d0b-44b2-af37-137d48034b00.html"
                          title="(檔案下載)112年失智照護服務計畫申請作業須知.pdf"
                        >
                          112年失智照護服務計畫申請作業須知.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77725-9a78ae1d-b482-429b-8d5c-58b8bc409d84.html"
                          title="(檔案下載)111年失智照護服務計畫申請作業須知.pdf"
                        >
                          111年失智照護服務計畫申請作業須知.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77724-b09348b7-f64e-457f-919a-0d82aec32b3a.html"
                          title="(檔案下載)110年度失智照護服務計畫申請作業須知(修正版).pdf"
                        >
                          110年度失智照護服務計畫申請作業須知(修正版).pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77730-2e0dc93b-efbc-45dd-81ce-267a71deb97a.html"
                          title="(檔案下載)109年度失智照護服務計畫申請作業須知.pdf"
                        >
                          109年度失智照護服務計畫申請作業須知.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77862-f8e0388d-1924-4dfc-a788-324e92115ac8.html"
                          title="(檔案下載)108年度失智照護服務計畫申請作業須知.pdf"
                        >
                          108年度失智照護服務計畫申請作業須知.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77726-c400356f-af2f-4192-8090-9435cda5d12d.html"
                          title="(檔案下載)失智症照顧服務20小時訓練課程.odt"
                        >
                          失智症照顧服務20小時訓練課程.odt
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77727-c62364ac-e7c0-4810-90af-84792c7c2721.html"
                          title="(檔案下載)失智症照顧服務20小時訓練課程.pdf"
                        >
                          失智症照顧服務20小時訓練課程.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77728-9347d3da-80b5-47f3-abbd-ada2370dc6bd.html"
                          title="(檔案下載)失智症醫事專業8小時訓練課程.odt"
                        >
                          失智症醫事專業8小時訓練課程.odt
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-77729-7b9ce107-d767-4291-85bd-4e8a9b1b886e.html"
                          title="(檔案下載)失智症醫事專業8小時訓練課程.pdf"
                        >
                          失智症醫事專業8小時訓練課程.pdf
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-87069-c19f25ec-a85e-4a16-97b1-aeab6c78f8f6.html"
                          title="(檔案下載)失智服務人員4小時基礎訓練課程.odt"
                        >
                          失智服務人員4小時基礎訓練課程.odt
                        </a>
                      </li>
                      <li>
                        <a
                          className="custom-link"
                          href="https://www.mohw.gov.tw/dl-87070-8d56f5fe-dacd-42e5-ae49-eafd4a446ef2.html"
                          title="(檔案下載)失智服務人員4小時基礎訓練課程.pdf"
                        >
                          失智服務人員4小時基礎訓練課程.pdf
                        </a>
                      </li>
                    </ul>
                  </div>
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
export default SubsidyLink3;
