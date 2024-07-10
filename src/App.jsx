import './App.css'
import Header from './components/Header'
import {Routes , Route} from 'react-router-dom'
import UserCreate from './components/UserCreate'
import UserList from './components/UserList'

function App() {
 
  return (
   <div>
    <Header/>
    <Routes>
      <Route path="/" element={<UserCreate/>} />
      <Route path="/userList" element={<UserList/>} />
    </Routes>
   </div>
  )
}

export default App
