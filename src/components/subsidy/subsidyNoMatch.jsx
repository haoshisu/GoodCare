import React from "react";
import "../../asset/css/subsidy.css";

const SubsidyNoMatch = ({ goToFirst }) => {
  return (
    <React.Fragment>
      {/* <div className="container col-1"></div> */}
      <div className="container col-10">
        <div className="row">
          <div className="col-md-12 text-left">
            <h1 style={{ fontWeight: "bold" }}>
              長照服務補助資訊專區- 查詢結果
            </h1>
          </div>
        </div>
        <div className="container col-1"></div>
        <div className="container col-10 noMatchCard">
          <div className="row justify-content-center mt-4 mb-4">
            <div className="col-12 ">
              <div className="content text-center">
                <h3 className="noMatch">
                  很抱歉，您所輸入的資料不符合長照2.0補助對象，請參考以下流程：
                </h3>
                <p></p>
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <img
                      src={require("../../asset/images/subsidy/process.png")}
                      alt="process"
                      className="centered-image"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="btn btn-lg custom-button px-5"
                    onClick={goToFirst}
                  >
                    重新查詢
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
export default SubsidyNoMatch;
