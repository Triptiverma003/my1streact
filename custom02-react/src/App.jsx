import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
let [counter, setCounter] = useState(15)
  //let counter = 15
  const addvalue = () =>{
    setCounter(counter+1)
    console.log("clicked", counter);
  }
  const rem = () => {
    setCounter(counter-1)
    }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addvalue}> add values </button>
    <br/>
    <br/>
    <button onClick={rem}> remove values</button>
    </>
  )
}

export default App
