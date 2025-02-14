import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { Routes,Route } from 'react-router'
import Login from './Login'
import Register from './Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
       <Route index element={<Home />} />

       <Route path="login" element={<Login />} />
       <Route path="register" element={<Register />} />
    


    </Routes>
    
   
   
  
  )
}

export default App
