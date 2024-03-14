import React from 'react'
import { Link } from 'react-router-dom';

import './ProductSideBar.css' 

const ProductSideBar = ({ category, title }) => {
    console.log(category)
    return (
        <>
          {/* <div className="container">
            <div className="row">
                <div className="col-2">
                    <div className="mb-3 mt-3">
                        <h1 style={{color:"#663c2a",fontWeight: "bold"}}>
                            { title }
                        </h1>
                    </div>
                </div>
            </div>
          </div> */}
          <div className="col-2">
            <div className="w3-sidebar w3-bar-block w3-light-grey w3-card h-auto">
              <Link to="/product/所有商品" className="w3-bar-item w3-button w3-border-bottom" >所有商品</Link>
              <Link to="/product/category/拐杖" className="w3-bar-item w3-button w3-border-bottom">拐杖</Link>
              <Link to="/product/category/輪椅" className="w3-bar-item w3-button w3-border-bottom">輪椅</Link>
              <Link to="/product/category/額耳溫槍" className="w3-bar-item w3-button w3-border-bottom">額(耳)溫槍</Link>
              <Link to="/product/category/氣墊床" className="w3-bar-item w3-button w3-border-bottom">氣墊床</Link>
            </div>
          </div>
        </>


    )

}
export default ProductSideBar