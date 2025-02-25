import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
         
        </Routes>
      </Router>
      
      
    </div>
  )
}

export default App 