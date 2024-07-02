import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux-toolkit/countReducer'

function Count() {
    const count=useSelector(state=>state.count);
    const dispatch=useDispatch()
  return (
    <div className='count'>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <h3>{count}</h3>
        <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Count