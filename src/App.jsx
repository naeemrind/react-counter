import React, { useState } from 'react'
import './App.css'

const App = () => {
  let [count, setCount] = useState(0)
  return (
    <>
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={ ()=> setCount(count - 1) } disabled={count === 0} >Decrease</button>
      <button onClick={ ()=> setCount(count + 1) } >Increase</button>
    </div>
    
    </>
  )
}

export default App