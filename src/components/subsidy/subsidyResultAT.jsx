import React, { useState } from "react";
import "../../asset/css/subsidy.css";

const SubsidyResultAT = () => {
  const [activeContent, setActiveContent] = useState("content1");

  const showContent = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <React.Fragment>
      <div id="content4" className="content-block">
        <h3 className="text-center">輔具/居家無障礙服務</h3>
        <div className="container-fluid">
          <table className="table table-striped custom-table ">
            <thead className="thead-dark">
              <tr>
                <th className="text-center col m-line">項目</th>
                <th className="text-center col m-line">資訊</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center m-line ">您的收入狀況為</td>
                <td className="text-center m-line" id="income">
                  一般戶
                </td>
              </tr>
              <tr>
                <td className="text-center m-line ">政府補貼每趟</td>
                <td className="text-center m-line" id="subsidy">
                  補助金額之70%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SubsidyResultAT;
