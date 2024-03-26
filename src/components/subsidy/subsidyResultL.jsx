import React, { useState } from "react";
import "../../asset/css/subsidy.css";

const SubsidyResultL = () => {
  return (
    <React.Fragment>
      <div
        id="content5"
        className="content-block"
        style={{ border: "1px dashed #000" }}
      >
        <h3 className="text-center">住宿式機構服務</h3>
        <p className="pLiving">
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
    </React.Fragment>
  );
};
export default SubsidyResultL;
