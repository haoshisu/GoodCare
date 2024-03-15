import React from 'react';
import './PathBox.css'

function PathBox() {

  return (
    <div className="container">
        <div className="row">
            <div className="col-12 pt-5 pb-4">
                <div className="h5">
                    <a href="#a" style={{textDecoration:'none', color:'black'}}>首頁</a> 
                    {">"} 
                    <a href="#a" style={{textDecoration:'none', color:'black'}}>最新消息</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PathBox;



