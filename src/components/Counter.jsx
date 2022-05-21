import React from 'react'
import { useState } from 'react'
import styles from"./style.module.css"

const Counter=({initialvalue}) => {

const [counter, setCounter]=useState(initialvalue)


  return (

    <div>
    <h1 className={counter%2=== 0 ? styles.red : styles.green}>Counter {counter}</h1>

    <button onClick={()=> setCounter(counter + 1)}>Increment</button>
    <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    <button onClick={() =>setCounter(counter*2)}>double</button>
    </div>
  )
}

export default Counter