import { useState , useCallback ,useEffect, useRef} from 'react'


function App() {
  const[length , setLength] = useState(8)
  const[character , setCharacter] = useState(false)
  const [number , setNumber] = useState(false)
  const[password , setPassword] =  useState("Password")
  //useref
  const passwordref = useRef(null)


  const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if(number) str+="0123456789"
      if(character) str+="!@#$%^&*(){}[]|<>"

      for(let i = 1; i<=length; i++){
          let char = Math.floor(Math.random()*str.length)+1
          pass += str.charAt(char)
      }
      setPassword(pass)
    },[length , character, number, setPassword])



    const copytoclipboard = useCallback(()=>{
      window.navigator.clipboard.writeText(password)
      passwordref.current?.select()
    }, [password])


    useEffect(()=>{
      passwordGenerator()
    },[length, number, character, passwordGenerator])
  return(
  <>
  <h1 className='text-white text-center my-3'> Password Generator</h1>
<div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
<div className='classname = "flex shadow rounded-lg overflow-hidden mb-2"'>
  <input type="text" 
  value = {password}
  className="outline-none w-full"
  placeholder="Password"
  readOnly
  ref = {passwordref}
  />

   <button onClick= {copytoclipboard} className='outline-none bg-blue-700 text-white  px-0 py-1 shrink-1'>copy</button>

</div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input 
  type='range'
  min = {6}
  max = {100}
  value={length}
  className='cursor-pointer'
  onChange={(e)=> setLength(e.target.value)}/>
  <label> length : {length}</label>
</div>
<div className="flex items-center gap-x-1">
    <input
      type="checkbox"
      defaultChecked={number}
      id="numberInput"
      onChange={() => {
      setNumberAllowed((prev) => !prev);
      }}/>
      <label htmlFor="numberInput">Numbers</label>
</div>
 <div className="flex items-center gap-x-1">
    <input
    type="checkbox"
    defaultChecked={character}
    id="characterInput"
    onChange={() => {
    setCharAllowed((prev) => !prev )}}/>
    <label htmlFor="characterInput">Characters</label>
  </div>
  </div>
  </div>
    </>
  )

  }
export default App
