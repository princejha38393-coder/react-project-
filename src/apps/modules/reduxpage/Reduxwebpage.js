import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,changename } from './Myfunctions';


function Reduxwebpage() {

    const mydata = useSelector((a)=>a.counter.salary);
    const xyz = useDispatch()


  return (
    <div>Reduxwebpage
        <h1>salary:{mydata}</h1>

    <input type='button' value="change value" onClick={()=>xyz(increment())}/>
    </div>
  )
}

export default Reduxwebpage