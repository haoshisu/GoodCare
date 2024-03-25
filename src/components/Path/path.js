import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Path = ({ onSearch }) => {

  const [searchvalue, setSearch] = useState({ value: "" })

  var Dochange = (e) => {
    setSearch({
      ...searchvalue,
      value: e.target.value
    })
  }

  var DoSearch = () => {

    onSearch(searchvalue.value)
    // console.log(searchvalue.value)
  }


  return (

    <div className="container">
      <div className="row d-flex justify-content-end">
        <div className="col-5 col-sm-5 col-md-4 col-lg-3 d-flex justify-content-center align-items-center mt-3">
          <div className="input-group ">
            <input type="text" className="form-control" placeholder="找商品" id="search" value={searchvalue.value} onChange={Dochange} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={DoSearch}><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
          </div>
        </div>
      </div>
    </div>


  )





}

export default Path