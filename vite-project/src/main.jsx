import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return (
  <div>
<h1> Custom App</h1>
</div>
  )
}
const reactElement = {
  type : 'a',
  props : {
    href : 'https://.google.com',
    target: '_blank',
  },
    children: "click me to visit the page"
}

/*const anotherElement = (
  <a href = "https://www.google.com" target = '_blank'> visit google</a>
)*/
const anotherusername = "chai aur react"
const reactelement = React.createElement(
'h1',
{h1 :'here i am'},
'hey',
anotherusername
)



ReactDOM.createRoot(document.getElementById('root')).render(
    reactelement
)
