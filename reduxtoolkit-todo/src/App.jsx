import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Addtodo from './Components/Addtodo';
import Todos from './Components/Todos';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl , text-white"> This my react-redux </h1><br/>
      <h2 className= 'text-white text-2xl'> Todo list </h2>
      <Addtodo />
      <Todos/>
    </>
  )
}

export default App
