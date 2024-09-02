import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15
  let [counter,setCounter] = useState(0)
  const addValue = () =>{
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () =>{
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Learning React</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick = {addValue}
    >Add Value</button> 
    <br />
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
