import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../redux-toolkit/isColorReducer';

function Color() {
    const count=useSelector(state=>state.count);
    const isColor=useSelector(state=>state.isColor)
    const dispatch=useDispatch()


  return (
    <div className={`color ${isColor ? "color_blue" : "color_black"} `}>
        {console.log(isColor)}
        <button onClick={()=>dispatch(changeColor(!isColor))}>click me</button>
        <h3>{count}</h3>
    </div>
  )
}

export default Color