import React from "react";
import "./SingleVideoContent.css";

const SingleVideoContent = ({ dataList }) => {
  // console.log(dataList)
  return (
    <div className="container singlevideocontent p-4">
      <iframe
        width="100%"
        height="500"
        src={dataList.link}
        title="YouTube video player"
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
      ></iframe>
      <div
        className="mb-3 mt-3 p-3"
        style={{ backgroundColor: "whitesmoke", height: "100%" }}
      >
        <h3 style={{ color: "#663c2a", fontWeight: "bold" }}>長照小學堂</h3>
        <ul>
          {dataList.tldr.map((val,ind) => (
            <li key={ ind }> { val } </li>
          ))}
        </ul>
      </div>
      <div className="mb-3 mt-3 p-3" style={{ backgroundColor: "whitesmoke" }}>
        <h3 style={{ color: "#663c2a", fontWeight: "bold" }}>長照小測驗</h3>
        <div className="container" style={{ height: "100%" }}>
          <p>{ dataList.quizTitle }</p>
          <div className="row">
            {dataList.quiz.map((val, ind) => {
              return ind / 2 === 0 ? (
                <div className="d-grid mb-3 col-6 mx-auto" key={ ind }>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-success"
                  >
                    {val}
                  </button>
                </div>
              ) : (
                <div className="d-grid mb-3 col-6 mx-auto" key={ ind }>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-success"
                  >
                    {val}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideoContent;
