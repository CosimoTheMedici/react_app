import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/counterSlice'

const Login = () => {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
   <div class="jumbotron">
  <h1 class="display-4">{count}</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <button class="btn btn-primary btn-lg" onClick={() => dispatch(increment())}>Increament  ++</button>{"  "}
    <button class="btn btn-primary btn-lg" onClick={() => dispatch(decrement())}>Decrement --</button>

  </p>
</div>
    </>
  )
}

export default Login