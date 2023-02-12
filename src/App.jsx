import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Hero from './components/Hero'
import styles from './style'
import Footer from './components/Footer'


function App() {

  return (
    <div className="bg-white md:w-32 lg:w-full">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <Hero />
      </div>
      <Footer/>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
