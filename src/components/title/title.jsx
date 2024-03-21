import React from 'react'
import './title.css'
const Title = ({ category, onSortChange }) => {

    const DoSortChange = (event) => {
        const sortBy = event.target.value;
        onSortChange(sortBy);
    }

    return (

        <div className="container">
            <div className="row mb-1">
                <div className="col-10">
                    <div className="mb-3 mt-3">
                        <h1 style={{ color: "#663c2a", fontWeight: "bold" }}>{category ? category : "所有商品"}</h1>
                    </div>
                </div>
                <div className="col-2 mb-3 mt-3 d-flex justify-content-end align-items-center">
                    <div>
                        <select name="" id="" onChange={DoSortChange}>
                            <option value="" >商品排序</option>
                            <option value="price_desc" >價格:高至低</option>
                            <option value="price_asc">價格:低至高</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>


    )


}
export default Title