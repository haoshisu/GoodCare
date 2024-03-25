import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './card.css'
import axios from 'axios'


const Card = ({ category,sortBy,search }) => {
    const [productList,setProductList] = useState([])
    // const [category] = useParams()
    // console.log(category)
    // useEffect(() => {
    //     if(category){
    //         axios.get(`http://localhost:8000/product/category/${category}`)
    //         .then((result => {
    //             setProductList(result.data)
    //         }))
    //     }else{
    //      axios.get(`http://localhost:8000/product/`)
    //     .then((result => {
    //         setProductList(result.data)
    //         // console.log(result.data)
    //     }))   
    //     }
        
    // },[category])
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = 'http://localhost:8000/product';
                if (category) {
                    url = `http://localhost:8000/product/category/${category}`;
                }else if(search){
                    url = `http://localhost:8000/product/searchproduct?search=${search}`
                }
                const response = await axios.get(url);
                let sortedProducts = response.data;
                if (sortBy === 'price_desc') {
                    sortedProducts = [...sortedProducts].sort((a, b) => b.price - a.price);
                } else if (sortBy === 'price_asc') {
                    sortedProducts = [...sortedProducts].sort((a, b) => a.price - b.price);
                }
                setProductList(sortedProducts);
            } 
            catch (error) {
                // console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, [category, sortBy,search]);







    return (
        
        <React.Fragment>
            {productList && productList.map((p,i) => (
                
                <div className={`col ${i % 3 === 1 && i !== 0 ? 'offset-md-0' : ''}`} key={i}>
                    <div className="card h-100"  style={{boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)"}} >
                        <a href={`/product/single/${p.id}`} style={{textDecoration:"none" , color:"black"}}>
                            <img src={require(`../../asset/images/numberImages/${p.id}.png`)} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            
                                <h5 className="card-title">{p.productName}</h5>
                                <p className="card-text">NTD$ {p.price}</p>
                            
                            </div>
                        </a>
                    
                    </div>
                </div>
                
            ))}

        </React.Fragment>
    )
}

export default Card
