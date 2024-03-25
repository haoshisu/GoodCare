import React from 'react'
import './SingleNews.css'

const SingleNews = ({ newsData }) => {
  const news = newsData

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-10 p-4 newsBox'>
            <h2 className='mb-3' style={{ fontWeight: "bold",textAlign: "center"}}>{news.title}</h2>
            <div className='text-muted mb-1'>來源：{news.source}</div>
            <div className='text-muted mb-3'>更新日期：{news.update}</div>
            <div className='container'>
              <div className='row'>
                <section className=' col-10 fs-5 mb-5'>
                  {news.content}
                </section>
              </div>
              <div className='row'>
              <div className='col-8 col-sm-8 col-md-9 col-lg-10 col-xl-10'></div>
            <a href={"/news"} type='button' className='col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 newsbtn mb-3'>返回新聞</a>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleNews