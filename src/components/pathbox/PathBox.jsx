import React from 'react';
import './PathBox.css';

function PathBox({ path, pathName }) {

  return (
    <div className="container">
        <div className="row">
            <div className="col-12 pt-5 pb-4">
                <div className="h5" id='pathBox'>
                    <a href="/"  style={{textDecoration:'none', color:'black'}}>首頁</a> 
                    {">"} 
                    <a href={ path } style={{textDecoration:'none', color:'black'}}>{ pathName }</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PathBox;



