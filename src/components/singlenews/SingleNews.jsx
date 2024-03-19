import React from 'react'

const SingleNews = ({ newsData }) => {
  const news = newsData

  return (
    <>
      <div className='container'>
        <div className='container'>
          <h2>{ news.title }</h2>
          <div className='row'>
            <div>{ news.source }</div>
            <div>{ news.update }</div>
          </div>
          <section>
            { news.content }
          </section>
          <a href={"/news"} type='button' className='btn btn-lg btn-info'>返回新聞</a>
        </div>
      </div>
    </>
  )
}

export default SingleNews