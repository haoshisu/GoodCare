import React, { useState } from "react";
import "../../asset/css/subsidy.css";
import SubsidyResultC from "../subsidy/subsidyResultC";
import SubsidyResultV from "../subsidy/subsidyResultV";
import SubsidyResultB from "../subsidy/subsidyResultB";
import SubsidyResultAT from "../subsidy/subsidyResultAT";
import SubsidyResultL from "../subsidy/subsidyResultL";

const SubsidyResult = ({ goToFirst }) => {
  const [activeContent, setActiveContent] = useState("content1");

  // const showContent = (contentId) => {
  //   setActiveContent(contentId);
  // };

  const [isCare, setIsCare] = useState(true);
  const [isVehicle, setIsVehicle] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [isAidTool, setIsAidTool] = useState(false);
  const [isLiving, setIsLiving] = useState(false);

  const goToCare = () => {
    setIsCare(true);
    setIsVehicle(false);
    setIsBreak(false);
    setIsAidTool(false);
    setIsLiving(false);
  };

  const goToVehicle = () => {
    setIsCare(false);
    setIsVehicle(true);
    setIsBreak(false);
    setIsAidTool(false);
    setIsLiving(false);
  };

  const goToBreak = () => {
    setIsCare(false);
    setIsVehicle(false);
    setIsBreak(true);
    setIsAidTool(false);
    setIsLiving(false);
  };

  const goToAidTool = () => {
    setIsCare(false);
    setIsVehicle(false);
    setIsBreak(false);
    setIsAidTool(true);
    setIsLiving(false);
  };

  const goToLiving = () => {
    setIsCare(false);
    setIsVehicle(false);
    setIsBreak(false);
    setIsAidTool(false);
    setIsLiving(true);
  };

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
          <div className="col-12">
            <div className="content">
              <h3 style={{ color: "#cf4501", fontWeight: "bold" }}>
                您的補助查詢結果:
              </h3>
              <p></p>
              <div className="container mt-5 custom-card">
                <div className="row">
                  <div className="col-md-12">
                    <div className="btn-container ">
                      <div className="btn-container btn-containerA">
                        <button
                          type="button"
                          className="btn btn-toggle"
                          onClick={() => {
                            goToCare();
                          }}
                        >
                          照顧服務
                        </button>
                        <button
                          type="button"
                          className="btn btn-toggle"
                          onClick={() => {
                            goToVehicle();
                          }}
                        >
                          交通接送服務
                        </button>
                        <button
                          type="button"
                          className="btn btn-toggle"
                          onClick={() => {
                            goToBreak();
                          }}
                        >
                          喘息服務
                        </button>
                        <button
                          type="button"
                          className="btn btn-toggle"
                          onClick={() => {
                            goToAidTool();
                          }}
                        >
                          輔具/居家無障礙服務
                        </button>
                        <button
                          type="button"
                          className="btn btn-toggle"
                          onClick={() => {
                            goToLiving();
                          }}
                        >
                          住宿式機構服務
                        </button>
                        {/* 其他按鈕 */}
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <hr />
                  <div className="col-md-9">
                    {/* 下方顯示內容 */}
                    {/* {activeContent === "content1" && <SubsidyResultC />}
                    {activeContent === "content2" && <SubsidyResultV />}
                    {activeContent === "content3" && <SubsidyResultB />}
                    {activeContent === "content4" && <SubsidyResultAT />}
                    {activeContent === "content5" && <SubsidyResultL />} */}
                    {isCare && <SubsidyResultC />}

                    {isVehicle && (
                      <SubsidyResultV
                        doCareBtn={goToCare}
                        doVehicleBtn={goToVehicle}
                        doBreakBtn={goToBreak}
                        doAidToolBtn={goToAidTool}
                        doLivingBtn={goToLiving}
                      />
                    )}

                    {isBreak && (
                      <SubsidyResultB
                        doCareBtn={goToCare}
                        doVehicleBtn={goToVehicle}
                        doBreakBtn={goToBreak}
                        doAidToolBtn={goToAidTool}
                        doLivingBtn={goToLiving}
                      />
                    )}

                    {isAidTool && (
                      <SubsidyResultAT
                        doCareBtn={goToCare}
                        doVehicleBtn={goToVehicle}
                        doBreakBtn={goToBreak}
                        doAidToolBtn={goToAidTool}
                        doLivingBtn={goToLiving}
                      />
                    )}

                    {isLiving && (
                      <SubsidyResultL
                        doCareBtn={goToCare}
                        doVehicleBtn={goToVehicle}
                        doBreakBtn={goToBreak}
                        doAidToolBtn={goToAidTool}
                        doLivingBtn={goToLiving}
                      />
                    )}
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

export default SubsidyResult;
