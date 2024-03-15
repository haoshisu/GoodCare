import React from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";

import videoData from '../components/singlevideocontent/VideoContent.json'

import "../asset/css/video.css";

function Video() {
    const sidebarTitle = "影音專區";
    const numberList = ['一', '二', '三', '四', '五', '六', '七']


    return (
        <React.Fragment>
            <Header />
            <IndexNav />
            <PathBox />
            <div className="container">
                <div className="row">
                    <SideBar title={sidebarTitle} />
                    {/* 這裡放你的主內容 */}
                    <div className="col-9 new-content">
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="home-tab-pane"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                tabIndex="0"
                            >
                                <div className="mb-4">
                                    {videoData &&
                                        videoData.map(
                                            (val, ind) => {
                                                return (
                                                    <>
                                                        <div className="row videoitem mb-4 mt-4" key={ind}>
                                                            <div className="col-4">
                                                                <img
                                                                    src={require(`../asset/images/video/video_0${ind < 10 ? '0' + (ind + 1) : ind + 1}.jpg`)}
                                                                    alt="thumbnail"
                                                                    style={{ width: "100%" }}
                                                                />
                                                            </div>
                                                            <div className="col-8 d-grid">
                                                                <h2>第{numberList[ind]}篇：{val.title} </h2>
                                                                <p className="text-muted">
                                                                    {val.content}
                                                                </p>
                                                                <a
                                                                    href={`/video/${ind}`}
                                                                    className="btn btn-lg btn-secondary btn-block"
                                                                // target="_blank"
                                                                // rel="noreferrer"
                                                                >
                                                                    點我看影片
                                                                </a>
                                                            </div>
                                                        </div>

                                                        {(ind < videoData.length) ?
                                                            <div
                                                                className="row mb-4"
                                                                style={{ borderBottom: "3px solid #DCDAD9" }}
                                                            ></div>
                                                            : <></>
                                                        }
                                                    </>

                                                )
                                            }
                                        )


                                    }

                                    <div className="row videoitem mb-4">
                                        <div className="col-4">
                                            <img src={require("../asset/images/video/video_003.jpg")} alt="thumbnail" style={{ width: '100%' }} />
                                        </div>

                                        <div className="col-8 d-grid">
                                            <h2>第三篇：四包錢四包服務</h2>
                                            <p className="text-muted">四包錢分別拿來補助四種長照服務，包含照顧與專業服務、交通接送服務、輔具與居家無障礙環境改善和照顧者喘息服務...</p>
                                            <a href="#a" target="_blank" className="btn btn-lg btn-secondary btn-block">點我看影片</a>
                                        </div>
                                    </div>

                                    <div className="row mb-4" style={{ borderBottom: '3px solid #DCDAD9' }}></div>

                                    <div className="row videoitem mb-4">
                                        <div className="col-4">
                                            <img src={require("../asset/images/video/video_004.jpg")} alt="thumbnail" style={{ width: '100%' }} />
                                        </div>

                                        <div className="col-8 d-grid">
                                            <h2>第四篇：失智照護服務</h2>
                                            <p className="text-muted">失智共同照護中心，簡稱共照中心。提供協助失智確診、諮詢及轉介醫療。...</p>
                                            <a href="#a" target="_blank" className="btn btn-lg btn-secondary btn-block">點我看影片</a>
                                        </div>
                                    </div>

                                    <div className="row mb-4" style={{ borderBottom: '3px solid #DCDAD9' }}></div>

                                    <div className="row videoitem mb-4">
                                        <div className="col-4">
                                            <img src={require("../asset/images/video/video_005.jpg")} alt="thumbnail" style={{ width: '100%' }} />
                                        </div>

                                        <div className="col-8 d-grid">
                                            <h2>第五篇：照顧觀念大翻轉</h2>
                                            <p className="text-muted">最新的照顧觀念為預防及延緩失能，能預防就預防，盡可能延緩失能的狀態。...</p>
                                            <a href="#a" target="_blank" className="btn btn-lg btn-secondary btn-block">點我看影片</a>
                                        </div>
                                    </div>

                                    <div className="row mb-4" style={{ borderBottom: '3px solid #DCDAD9' }}></div>

                                    <div className="row videoitem mb-4">
                                        <div className="col-4">
                                            <img src={require("../asset/images/video/video_006.jpg")} alt="thumbnail" style={{ width: '100%' }} />
                                        </div>

                                        <div className="col-8 d-grid">
                                            <h2>第六篇：家庭照顧者支持服務</h2>
                                            <p className="text-muted">照顧者支持團體透過定期與固定的活動，集結一塊互相給予支持與關懷，也能分享彼此經驗，讓照顧者不再感到孤單。...</p>
                                            <a href="#a" target="_blank" className="btn btn-lg btn-secondary btn-block">點我看影片</a>
                                        </div>
                                    </div>

                                    <div className="row mb-4" style={{ borderBottom: '3px solid #DCDAD9' }}></div>

                                    <div className="row videoitem mb-4">
                                        <div className="col-4">
                                            <img src={require("../asset/images/video/video_007.jpg")} alt="thumbnail" style={{ width: '100%' }} />
                                        </div>

                                        <div className="col-8 d-grid">
                                            <h2>第七篇：分享1966就是支持長照</h2>
                                            <p className="text-muted">把1966長照服務專線，分享給周遭需要使用的親朋好友吧！...</p>
                                            <a href="#a" target="_blank" className="btn btn-lg btn-secondary btn-block">點我看影片</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-8 d-grid">
                                <h2>第二篇：長照服務對象有哪些</h2>
                                <p className="text-muted">
                                    符合資格的人可以透過三種管道，如撥打1966電話或是親自到各縣市的照管中心洽詢，還有若在醫院時，可申請長照出院準備服務...
                                </p>
                                <a
                                    href="#a"
                                    target="_blank"
                                    className="btn btn-lg btn-secondary btn-block"
                                >
                                    點我看影片
                                </a>
                            </div>
                        </div>

                        <div
                            className="row mb-4"
                            style={{ borderBottom: "3px solid #DCDAD9" }}
                        ></div>

                        <div className="row videoitem mb-4">
                            <div className="col-4">
                                <img
                                    src={require("../asset/images/video/video_003.jpg")}
                                    alt="thumbnail"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div className="col-8 d-grid">
                                <h2>第三篇：四包錢四包服務</h2>
                                <p className="text-muted">
                                    四包錢分別拿來補助四種長照服務，包含照顧與專業服務、交通接送服務、輔具與居家無障礙環境改善和照顧者喘息服務...
                                </p>
                                <a
                                    href="#a"
                                    target="_blank"
                                    className="btn btn-lg btn-secondary btn-block"
                                >
                                    點我看影片
                                </a>
                            </div>
                        </div>

                        <div
                            className="row mb-4"
                            style={{ borderBottom: "3px solid #DCDAD9" }}
                        ></div>

                        <div className="row videoitem mb-4">
                            <div className="col-4">
                                <img
                                    src={require("../asset/images/video/video_004.jpg")}
                                    alt="thumbnail"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div className="col-8 d-grid">
                                <h2>第四篇：失智照護服務</h2>
                                <p className="text-muted">
                                    失智共同照護中心，簡稱共照中心。提供協助失智確診、諮詢及轉介醫療。...
                                </p>
                                <a
                                    href="#a"
                                    target="_blank"
                                    className="btn btn-lg btn-secondary btn-block"
                                >
                                    點我看影片
                                </a>
                            </div>
                        </div>

                        <div
                            className="row mb-4"
                            style={{ borderBottom: "3px solid #DCDAD9" }}
                        ></div>

                        <div className="row videoitem mb-4">
                            <div className="col-4">
                                <img
                                    src={require("../asset/images/video/video_005.jpg")}
                                    alt="thumbnail"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div className="col-8 d-grid">
                                <h2>第五篇：照顧觀念大翻轉</h2>
                                <p className="text-muted">
                                    最新的照顧觀念為預防及延緩失能，能預防就預防，盡可能延緩失能的狀態。...
                                </p>
                                <a
                                    href="#a"
                                    target="_blank"
                                    className="btn btn-lg btn-secondary btn-block"
                                >
                                    點我看影片
                                </a>
                            </div>
                        </div>

                        <div
                            className="row mb-4"
                            style={{ borderBottom: "3px solid #DCDAD9" }}
                        ></div>

                        <div className="row videoitem mb-4">
                            <div className="col-4">
                                <img
                                    src={require("../asset/images/video/video_006.jpg")}
                                    alt="thumbnail"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div className="col-8 d-grid">
                                <h2>第六篇：家庭照顧者支持服務</h2>
                                <p className="text-muted">
                                    照顧者支持團體透過定期與固定的活動，集結一塊互相給予支持與關懷，也能分享彼此經驗，讓照顧者不再感到孤單。...
                                </p>
                                <a
                                    href="#a"
                                    target="_blank"
                                    className="btn btn-lg btn-secondary btn-block"
                                >
                                    點我看影片
                                </a>
                            </div>
                        </div>

                        <div
                            className="row mb-4"
                            style={{ borderBottom: "3px solid #DCDAD9" }}
                        ></div>

                        <div className="row videoitem mb-4">
                            <div className="col-4">
                                <img
                                    src={require("../asset/images/video/video_007.jpg")}
                                    alt="thumbnail"
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div className="col-8 d-grid">
                                <h2>第七篇：分享1966就是支持長照</h2>
                                <p className="text-muted">
                                    把1966長照服務專線，分享給周遭需要使用的親朋好友吧！...
                                </p>
                                <a
                                    href="#a"
                                    target="_blank"
                                    className="btn btn-lg btn-secondary btn-block"
                                >
                                    點我看影片
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* 底下用8個換行空出雨footer距離 */ }
        < br />
      <br />
      <Footer />
      <BackToTopBtn />
    </React.Fragment >
  );
}

export default Video;
