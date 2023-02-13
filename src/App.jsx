import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import styles from './style'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="bg-white md:w-32 lg:w-full">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </div>
      <Footer/>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
