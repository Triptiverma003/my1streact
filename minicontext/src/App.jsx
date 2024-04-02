import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  return (
   <UserContextProvider>
    React with chai and share is important
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
