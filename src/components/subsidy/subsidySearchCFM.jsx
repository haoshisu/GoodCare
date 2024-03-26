//import React from "react";
import React, { useState } from "react";
import "../../asset/css/subsidy.css";

const SubsidySearchCFM = ({
  goToThird,
  goToFirst,
  goToNoMatch,
  selectedIdentity,
  formData,
}) => {
  console.log(formData);
  // Function to handle form submission
  const submitForm = () => {
    if (formData.identity === "其他") {
      goToNoMatch();
      //window.location.href = "/subsidyNoMatch";
    } else {
      // window.location.href = "/subsidyResult";
      goToThird();
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
          <div className="col-12">
            <div className="content">
              <h2 style={{ color: "#cf4501", fontWeight: "bold" }}>
                請確認以下您輸入的資訊是否正確:
              </h2>
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
                        <th className="text-center col m-line ">項目</th>
                        <th className="text-center col m-line">資訊</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center m-line">身份</td>
                        <td
                          className="text-center m-line"
                          id="identityPlaceholder"
                        >
                          {formData.identity}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">收入狀況</td>
                        <td className="text-center m-line" id="income">
                          {formData.income}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">
                          是否持有身心障礙證明
                        </td>
                        <td className="text-center m-line" id="disability">
                          {formData.disability}
                        </td>
                      </tr>
                      {/* <tr>
                        <td className="text-center m-line">縣市</td>
                        <td className="text-center" id="city">
                          {formData.city}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center m-line">區域</td>
                        <td className="text-center" id="district">
                          {formData.district}
                        </td>
                      </tr> */}
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
                    onClick={submitForm}
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
export default SubsidySearchCFM;
