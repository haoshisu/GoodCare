import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Counter = () => {
    const [counter, setCounter] = useState(1)

    var doPlus = () => {
        var newcounuter = 0
        if (counter < 10){
            newcounuter = counter +1
            setCounter(newcounuter)             
        }else{
            newcounuter = 10
            setCounter(newcounuter)
        }
        
    }

    var doReduce = () => {
        var newcounuter = 0
        if(counter > 1) {
            newcounuter = counter -1
            setCounter(newcounuter)
        }else{
            newcounuter = 1
            setCounter(newcounuter)
        }
        
    }
    
    return(
        <React.Fragment>
            <button class="btn btn-outline-secondary" type="button" onClick={doReduce}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
            <input type="text" class="form-control text-center" value= {counter} id='quantity'/>
            <button class="btn btn-outline-secondary" type="button" onClick={doPlus}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
        </React.Fragment>
    )


}

export default Counter