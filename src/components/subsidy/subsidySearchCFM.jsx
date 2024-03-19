// import React from "react";
import React, { useState } from "react";
import Header from "../header/Header";
import IndexNav from "../indexnav/IndexNav";
import PathBox from "../pathbox/PathBox";
import Footer from "../footer/Footer";
import BackToTopBtn from "../backtotopbtn/BackToTopBtn";
import "../../asset/css/subsidy.css";
import { Link } from "react-router-dom";

const subsidySearchCFM = ({ goToThird, goToFirst }) => {
  const populateDistricts = () => {
    const citySelect = document.getElementById("city");
    const districtSelect = document.getElementById("district");
    const city = citySelect.value;
    districtSelect.innerHTML = "";

    // Define districts based on selected city
    let districts = [];
    switch (city) {
      case "台北市":
        districts = [
          "大安區",
          "萬華區",
          "信義區",
          "中正區",
          "松山區",
          "大同區",
          "中山區",
          "北投區",
          "士林區",
          "內湖區",
          "南港區",
        ];
        break;
      case "新北市":
        districts = [
          "板橋區",
          "三重區",
          "中和區",
          "新莊區",
          "永和區",
          "土城區",
          "樹林區",
          "三峽區",
          "鶯歌區",
          "新店區",
          "坪林區",
          "烏來區",
          "汐止區",
          "深坑區",
          "石碇區",
          "平溪區",
          "雙溪區",
          "貢寮區",
          "金山區",
          "萬里區",
          "蘆洲區",
          "五股區",
          "泰山區",
          "林口區",
          "八里區",
          "淡水區",
          "三芝區",
          "石門區",
        ];
        break;
      case "桃園市":
        districts = [
          "中壢區",
          "平鎮區",
          "龍潭區",
          "楊梅區",
          "新屋區",
          "觀音區",
          "桃園區",
          "龜山區",
          "八德區",
          "大溪區",
          "復興區",
          "大園區",
          "蘆竹區",
        ];
        break;
      // Add districts for other cities as needed
      default:
        break;
    }

    // Dynamically add district options to the dropdown
    districts.forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  };

  // Retrieve selected identity from sessionStorage and display it
  const selectedIdentity = sessionStorage.getItem("selectedIdentity");
  const identityPlaceholder = document.getElementById("identityPlaceholder");
  if (identityPlaceholder) {
    identityPlaceholder.textContent = selectedIdentity;
  }

  // Function to handle form submission
  const submitForm = () => {
    const selectedIdentity = document
      .getElementById("identityPlaceholder")
      .textContent.trim();
    if (selectedIdentity === "其他") {
      window.location.href = "/subsidyNoMatch"; // Redirect to no match page for "其他"
    } else {
      window.location.href = "/subsidyResult"; // Redirect to search result page
    }
  };
  return (
    <React.Fragment>
      <div className="container col-10">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>
              長照服務補助資訊專區- 資訊確認
            </h1>
          </div>
        </div>
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-10">
            <div className="content">
              <h3 style={{ color: "#cf4501", fontWeight: "bold" }}>
                請確認以下您輸入的資訊是否正確:
              </h3>
              <p></p>
              <div className="row">
                <div className="d-flex justify-content-center mt-2 mb-2">
                  <img
                    src={require("../../asset/images/subsidy/cuteOldmen.png")}
                    alt="elder"
                    className="img-fluid"
                  />
                </div>

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
                        <td className="text-center m-line">身份</td>
                        <td className="text-center" id="identityPlaceholder">
                          {selectedIdentity}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">收入狀況</td>
                        <td className="text-center" id="income">
                          一般戶
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">
                          是否持有身心障礙證明
                        </td>
                        <td className="text-center" id="disability">
                          否
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">縣市</td>
                        <td className="text-center" id="city">
                          台北市
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">區域</td>
                        <td className="text-center" id="district">
                          大安區
                        </td>
                      </tr>
                      {/* Add other form items as needed */}
                    </tbody>
                  </table>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-lg btn-outline-success px-5"
                    onClick={goToFirst}
                  >
                    重新填寫
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-lg custom-button px-5"
                    onClick={goToThird}
                  >
                    確認送出
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default subsidySearchCFM;
