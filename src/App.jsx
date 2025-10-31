import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
const App = () => {
  return (
    <div  className='text-white'>
 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Solutions'element={<Solutions/>}/>
        <Route path='/Pricing'element={<Pricing/>}/>

      </Routes>
    </div>
  )
}

export default App;
