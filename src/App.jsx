import { useState } from 'react'

import './App.css'
import Home from './home'
import Header from './header'
import Sidebar from './sidebar'

function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
      
    </div>
  )
}

export default App
