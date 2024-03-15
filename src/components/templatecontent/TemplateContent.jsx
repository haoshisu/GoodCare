import React from 'react';
import './Template.css'

function TempalteContent () {

    return (
      <div className="col-9" style={{ boxShadow:'0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',borderRadius:'10px'}}>
        
        <div className='mt-4 mb-4' style={{ border:'3px solid #DCDAD9', height:'200px' }}>1</div>
        <div className='mt-4 mb-4' style={{ border:'3px solid #DCDAD9', height:'200px' }}>2</div>
        <div className='mt-4 mb-4' style={{ border:'3px solid #DCDAD9', height:'200px' }}>3</div>
        
      </div>
    )
}

export default TempalteContent
