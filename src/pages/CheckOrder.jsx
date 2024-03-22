import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import IndexNav from '../components/indexnav/IndexNav'
import Footer from '../components/footer/Footer'
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import axios from 'axios';

const CheckOrder = () => {
  const [orderContact, setOrderContact] = useState([])
  const [orderProduct, setOrderProduct] = useState([])

  // get member id
  const localData = localStorage.getItem('auth')
  const userData = localData? JSON.parse(localData):null

  const fetchData = async () => {
    await axios.get('http://localhost:8000/ordercontact').then(
      (result)=>{
        const orders = result.data.filter(ind => ind.memberid === userData.memberID);
        const newOrderContact = [...orderContact, orders]
        setOrderContact(newOrderContact)
      }).then(()=>{
        // 使用 Set 物件來取得唯一的 member id
        const uniqueMemberIds = new Set(orderContact.map(order => order.orderid));
        // 將 Set 轉換為陣列
        const uniqueMemberIdsArray = Array.from(uniqueMemberIds);
        try{
          for(const id of uniqueMemberIdsArray) {
            fetchData2(id)
          }
        } catch(err) {
          console.log(err)
        }
      })
  }
  const fetchData2 = async (orderid) => {
    await axios.get('http://localhost:8000/orderproduct').then(
      (result)=>{
        const orders = result.data.filter(ind => ind.orderid === orderid);
        const newOrderProduct = [...orderProduct, orders]
        setOrderProduct(newOrderProduct)
      })
  }

  useEffect(() => {
    fetchData()
  },[])

  // console.log(orderContact)
  // console.log(orderProduct)
  // console.log(userData)
  return (
    <>
      <Header />
      <IndexNav />
      <div className='container mt-5'>
        <div className="row">
          <h2>{userData && userData.name} 的訂單查詢</h2>
          {/* 購物車明細 */}
          <div className="mt-5">
            <div class="accordion" id="accordion">
              { orderContact && 
                orderContact[0].map((val,ind)=>{
                  return(
                    <div class={"accordion-item"+ind} key={ind}>
                      <h2 class="accordion-header" id={"heading"+ind}>
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#collapse"+ind}
                          aria-expanded="true"
                          aria-controls={"collapse"+ind}
                        >
                          { val.orderid }
                        </button>
                      </h2>
                      <div
                        id={"collapse"+ind}
                        class="accordion-collapse collapse"
                        aria-labelledby={"heading"+ind}
                        data-bs-parent={"#accordion"+ind}
                      >
                        <div class="accordion-body">
                          <table className="table" style={{ width: "100%" }}>
                            <thead>
                              <tr>
                                <th scope="col">商品圖片</th>
                                <th scope="col">商品名稱</th>
                                <th scope="col">單價</th>
                                <th scope="col">數量</th>
                                <th scope="col">小計</th>
                              </tr>
                            </thead>
                            <tbody>
                              {/* {orderProduct.map((val) => {
                                if ()
                                return (
                                  <tr key={val.id}>
                                    <td>
                                      <img
                                        src={require(`../../asset/images/numberImages/${val.id}.png`)}
                                        alt="Product"
                                        width="150"
                                        height="150"
                                      />
                                    </td>
                                    <td>{val.productName}</td>
                                    <td>{val.price}</td>
                                    <td>{val.quantity}</td>
                                    <td>{val.quantity * val.price}</td>
                                  </tr>
                                );
                              })} */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
      <BackToTopBtn />
    </>
  )
}

export default CheckOrder