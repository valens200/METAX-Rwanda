import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

function Counter() {
  const increase = () => {
    dispatch(increment())
    console.log('clicked')
  }
  const dispatch = useDispatch()
  return (
    <section>
      <div>{useSelector((state) => state.counterr.count)}</div>
      <div>
        <button onClick={increase}>increment</button>
        <button onClick={dispatch(decrement())}>decreement</button>
      </div>
    </section>
  )
}
export default Counter
