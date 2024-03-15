import React from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import Homefooter from "../components/homefooter/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import ScrollEffectComponent from "../components/hover/hover";
import MyClassComponent from "../components/aos/aos";
import SwiperComponent from "../components/swiper/swiperComponent";
// import Scroll from'../components/scroll/scroll';

import { Helmet } from "react-helmet";

import "../asset/css/home.css";

const Home = () => {
  return (
    <React.Fragment>
      <>
        {/* <Scroll /> */}
        <Header />
        <IndexNav />
        <br />
        <br />
        <br />
        <br />
        <MyClassComponent />
        <SwiperComponent />
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-4 d-flex justify-content-center ">
              <h1>長期照顧服務項目pika</h1>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col-7 d-flex justify-content-center">
              <h4>
                實現在地老化，提供從支持家庭、居家、社區到住宿式照顧之多元連續服務
              </h4>
            </div>
            <div class="col"></div>
          </div>
        </div>
        <div class="container">
          <div class="icon">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon1.png")} />
                  <span>照顧及專業服務</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon2.png")} />
                  <span>長照據點</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon3.png")} />
                  <span>醫療輔具</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon4.png")} />
                  <span>預約照服員</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="icon">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon5.png")} />
                  <span>出院準備</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon6.png")} />
                  <span>家庭照顧者支持服務</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon7.png")} />
                  <span>交通接送</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src={require("../asset/images/Home/icon8.png")} />
                  <span>輔助資訊</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <ScrollEffectComponent />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container">
          <div class="brand">
            <div class="row">
              <div class="col"></div>
              <div class="col-5 d-flex flex-column justify-content-center ">
                <img
                  src={require("../asset/images/Home/brandlogo.png")}
                  alt="brand"
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col"></div>
              <div class="col-5 d-flex flex-column  justify-content-center text-center">
                <h1 class="brand1">
                  <span
                    style={{ borderBottom: "solid 2px rgb(112, 110, 110)" }}
                  >
                    品牌簡介
                  </span>
                </h1>
                <h4>
                  &emsp;&emsp;好照顧(Good Care)
                  是提供溫暖關懷的長期照顧服務平台。我們的網站以人性化的介面、易於理解的操作畫面為特色，旨在整合政府繁文縟節的補
                  助規章，並提供專業建議和便捷的預約服務。好照顧品牌以溫暖與關懷為核心價值，致力為需要照顧的人群和關懷者提供支持和幫助。
                </h4>
              </div>
              <div class="col"></div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col"></div>
              <div class="col-5 d-flex flex-column  justify-content-center text-center">
                <h1 class="brand1">
                  <span
                    style={{ borderBottom: "solid 2px rgb(112, 110, 110)" }}
                  >
                    動機與目的
                  </span>
                </h1>
                <h4>
                  &emsp;&emsp;台灣自2018年開始步入高齡社會，預計在2025年後成為超高齡社會，長
                  照需求急遽增加下，政府也在2017年推出長照2.0
                  政策，促進建立完善的長照體制，完備我國社會安全體系。
                  好照顧網站平台旨在整合長照項目及
                  長照2.0資訊，包括居家照顧、長照機構資訊、醫療輔具租購等，提供長照
                  一條龍的安心服務。
                </h4>
              </div>
              <div class="col"></div>
              <div class="d-flex justify-content-center align-items-center col-5">
                <img
                  src={require("../asset/images/Home/hand.png")}
                  alt="brand"
                  style={{ borderRadius: "10px", width: "100%" }}
                />
              </div>
              <div class="col"></div>
            </div>
            <br />
            <br />
            <div class="row">
              <div class="col"></div>
              <div class="col-5 d-flex flex-column justify-content-center mt-3">
                <img
                  src={require("../asset/images/Home/percentage.png")}
                  alt="brand"
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col"></div>
              <div class="col-5 d-flex flex-column  justify-content-center text-center">
                <h1 class="brand1">
                  <span
                    style={{ borderBottom: "solid 2px rgb(112, 110, 110)" }}
                  >
                    高齡人口數
                  </span>
                </h1>
                <h4>
                  &emsp;&emsp;臺灣65歲以上之人口數，從1960年的27萬人成長至2023年的379萬人，依年齡別區分，三個年齡層在1960年至2023年之人口數皆有上升的趨勢，而2030年至2050年係使用「中推估」進行人口推計，故以
                  淺色呈現。依性別分層，65歲以上之女性人口數增加較男性人口數多。
                </h4>
              </div>
              <div class="col"></div>
            </div>
            <div class="row">
              <div class="col"></div>
              <div class="col-5 d-flex flex-column  justify-content-center text-center">
                <h1 class="brand1">
                  <span
                    style={{ borderBottom: "solid 2px rgb(112, 110, 110)" }}
                  >
                    各鄉鎮分佈
                  </span>
                </h1>
                <h4>
                  &emsp;&emsp;高齡人口分布方面，2021年底臺灣各該縣市65歲以上人口占該縣市總人口的百分比前3名的縣市為嘉義縣(21.1%)、臺北市(20.0%)、雲林縣(19.7%)。東半部由高至低則是花蓮縣(18.3%)、臺東縣(18.1%)、宜蘭縣(18.0%)。
                </h4>
              </div>
              <div class="col"></div>
              <div class="col-5 d-flex flex-column justify-content-center ">
                <img
                  src={require("../asset/images/Home/taiwan1.png")}
                  alt="brand"
                  style={{ width: "100%" }}
                />
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="d-flex justify-content-center">
          <img src={require("../asset/images/Home/footerold.png")} />
        </div>
        <div class="footersunflower">
          <div id="position" class="sunflower">
            <div class="head">
              <div id="eye-1" class="eye"></div>
              <div id="eye-2" class="eye"></div>
              <div class="mouth"></div>
            </div>
            <div class="petals"></div>
            <div class="trunk">
              <div class="left-branch"></div>
              <div class="right-branch"></div>
            </div>
            <div class="vase"></div>
          </div>
          <div id="position2" class="sunflower">
            <div class="head">
              <div id="eye-1" class="eye"></div>
              <div id="eye-2" class="eye"></div>
              <div class="mouth"></div>
            </div>
            <div class="petals"></div>
            <div class="trunk">
              <div class="left-branch"></div>
              <div class="right-branch"></div>
            </div>
            <div class="vase"></div>
          </div>
          <img src={require("../asset/images/Home/footerweeds.png")} />
        </div>
      </>
      <Homefooter />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Home;
