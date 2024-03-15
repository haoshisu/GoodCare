import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './single.css'
import axios from 'axios'
import Counter from '../Counter/counter'


const Single = () => {
    const [singleList, setsingleList] = useState([{id:0,productName:'',productDescription:''}])
    
    const params = useParams();
    // console.log(params)

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:8000/product/single/${params.id}`)
            setsingleList(result.data)
        }
        fetchData()
    },[params.id])

    const index = params.id
    console.log(index)
    

    var text = singleList[0].productDescription
    // var cardtext= text.replace(/[\\n]/g,'') + '<br/>' 
    // console.log(cardtext)
    const cardText = text.split('\\n').map((line, index) => (
        <React.Fragment>
          {line}
          <br />
        </React.Fragment>
      ));
      
    return (
    <>
        <div className="card mb-3" style={{maxWidth: "1300px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require(`../../asset/images/numberImages/${index}.png`)} alt="..." className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{singleList[0].productName}</h3>
                        <br/>
                        <p className="card-text" style={{fontSize: "18px"}} id='cardtext'>{cardText}</p>
                        
                        <p className="card-text"><h3 style={{color:"orangered"}}>NT ${singleList[0].price}</h3></p>
                        {/* <!-- 數量按鈕 --> */}
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="h4">數量</span>
                            </div>
                            <div className="col-4">
                                <div className="input-group">
                                    <Counter/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        {/* <!-- 直接購買 & 放入購物車 --> */}
                        <div>
                            <button className="btn btn-outline-success" type="button" style={{width: "300px"  ,fontSize: "18px"}}>直接購買</button>
                            <button className="btn btn-warning ms-5 text-white" type="button" style={{width: "300px",fontSize: "18px"}}>放入購物車</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 商品介紹 --> */}
            <div className="mt-5">
                <h1 className="text-center mb-5" style={{fontSize: "55px"}}>商品規格</h1>
                <img src={require(`../../asset/images/numberDescripiton/${index}.png`)} alt=""/>
            </div>
        </div>
        


    
    </>

    )
}

export default Single