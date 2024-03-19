import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Pagination from '../components/pagination/Pagination'
import axios from 'axios';

import '../asset/css/news.css'

function TemplateNews() {
    const sidebarTitle = '最新消息'

    let [newsData, setNewData] = useState([])
    let [curPage,setCurPage] = useState(1)
    let [newsNum,setNewsNum] = useState(10)
    
    const FetchData = async () => {
        const result = await axios.get('http://localhost:8000/news')
        setNewData(result.data)
    }

    useEffect(()=>{
        FetchData()
      },[])
      
      const lastIndex = curPage * newsNum;
      const firstIndex = lastIndex - newsNum;
      const currentNews =  newsData.slice(firstIndex, lastIndex)
    // console.log(newsData)

    return (
      <React.Fragment>
        <Header />
        <IndexNav />
        <PathBox />
        <div className="container">
            <div className="row">
              <SideBar title={ sidebarTitle }/>

              {/* 這裡放你的主內容 */}
              <div className='col-9'>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li>
                        <button className="nav-link" style={{  backgroundColor: '#214F39',color: 'white',textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>焦點新聞</button>
                    </li>
                  </ul>
                  <div className="tab-content " id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                      <div className="mb-4 new-content container">
                      {currentNews.map((val,ind) => {
                          return (
                            <>
                              <div className="newsitem row" key={ind}>
                                <div className='col-10 text-truncate'>
                                  <a type="button" className='newslink' data-bs-toggle="modal" href={"#Modal"+ind}>
                                  {val.title}
                                  </a>
                                </div>
                                <div className='col-2 text-muted'>
                                  { val.update }
                                </div>
                              </div>
                              <div className="modal fade" id={"Modal"+ind} tabindex="-1" aria-labelledby={"ModalLabel"+ind} aria-hidden="true">
                                <div className="modal-dialog modal-md">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id={"Modal"+ind}>{ val.title }</h5>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                      <div className='text-muted'><p>來源：{ val.source }</p></div>
                                      <div className='text-muted'><p>更新日期：{ val.update }</p></div>
                                      <br />
                                      新聞內容：
                                      <section>
                                      { val.content }
                                      </section>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) 
                        })
                      }     
                      </div>
                    </div>
                  </div> 
                    <Pagination 
                      totalNews={newsData.length}
                      newsNum={newsNum}
                      setCurPage={setCurPage}
                      curPage={curPage}
                    />
              </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        {/* 底下用8個換行空出雨footer距離 */}
        <Footer />
        <BackToTopBtn />
      </React.Fragment>
    );
  }

export default TemplateNews