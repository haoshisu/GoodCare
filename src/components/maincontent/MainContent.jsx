import React from 'react';

function MainContent({data}) {

  return (
  <div className="col-9">
    <div>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                aria-selected="true">{"焦點新聞"}</button>
        </li>
    </ul>
    <div className="tab-content " id="myTabContent">
      <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
        aria-labelledby="home-tab" tabIndex="0">
        <div className="mb-4 new-content">
            {
                data.map((val) => {
                    return(
                        <div className="newsitem"><a href="#a" target="_blank">
                            {val.title}
                        </a></div>
                )
            })
            }
        </div>
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
                <a className="page-link" href="#a" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#a">1</a></li>
            <li className="page-item"><a className="page-link" href="#a">2</a></li>
            <li className="page-item"><a className="page-link" href="#a">3</a></li>
            <li className="page-item">
                <a className="page-link" href="#a" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  </div>
  );
}

export default MainContent;



