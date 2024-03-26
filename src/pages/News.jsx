import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import SingleNews from '../components/singlenews/SingleNews';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Pagination from '../components/pagination/Pagination'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import '../asset/css/news.css'

function TemplateNews() {
  const sidebarTitle = '最新消息'
  var location = useLocation();
  let params = new URLSearchParams(location.search);
  let keyword = params.get('keyword');
  let [newsData, setNewData] = useState([])
  let [curPage, setCurPage] = useState(1)
  let [newsNum, setNewsNum] = useState(10)

  const FetchData = async () => {
    const result = await axios.get('http://localhost:8000/news', {
      params: {
        keyword: keyword
      }
    })
    setNewData(result.data)
  }

  useEffect(() => {
    FetchData()
  }, [])

  // pagination
  const lastIndex = curPage * newsNum;
  const firstIndex = lastIndex - newsNum;
  const currentNews = newsData.slice(firstIndex, lastIndex)

  //show single news
  const [singleNews, setSingleNews] = useState({})
  const [isShow, setIsShow] = useState(false)

  const showNews = (news) => {
    setSingleNews(news)
    setIsShow(true)
  }

  return (
    <>
      <Header />
      <IndexNav />
      <PathBox pathName={"最新消息"} path={"/news"} />
      {!isShow &&
        <div className="container">
          <div className="row">
            <SideBar title={sidebarTitle} />

            {/* 這裡放你的主內容 */}
            <div className='col-md-12 col-lg-9 col-xl-9'>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li>
                  <button className="nav-link" style={{ backgroundColor: '#214F39', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>焦點新聞</button>
                </li>
              </ul>
              <div className="tab-content " id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                  <div className="mb-4 new-content container">
                    {currentNews &&
                      currentNews.map((val, ind) => {
                        return (
                          <>
                            <div className="newsitem d-flex" key={ind}>
                              <div className='col-10 text-truncate'>
                                <a href='#a' type='button' className='newslink'
                                  onClick={() => {
                                    showNews({
                                      title: val.title,
                                      content: val.content,
                                      source: val.source,
                                      create: val.create,
                                      update: val.update
                                    })
                                  }}
                                >
                                  {val.title}
                                </a>
                              </div>
                              <div className='col-2 text-muted mutedcontent'>
                                {val.update}
                              </div>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <Pagination totalNews={newsData.length}
                newsNum={newsNum}
                setCurPage={setCurPage}
                curPage={curPage}
              />
            </div>
          </div>
        </div>
      }
      <br />
      <br />
      <br />
      {isShow &&
        <SingleNews newsData={singleNews} />
      }
      <Footer />
      <BackToTopBtn />
    </>
  );
}

export default TemplateNews