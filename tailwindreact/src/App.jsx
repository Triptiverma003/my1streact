
import Card from './component/Card'
let myobject = {
  name: "Tripti",
  age: 19
}
function App() {
  const [count, setCount] = useState(0)
  return (
  <>
  <h1 > Tailwind test</h1>
  <Card username = "chai aur code" someobject = {myobject} btnText = "visit me"/>
  <Card username = "tripti"/>
  
  </>
  )
}

export default App
