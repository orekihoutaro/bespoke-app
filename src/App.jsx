import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Hero from './components/Hero'
import styles from './style'
import Footer from './components/Footer'


function App() {

  return (
    <div className="bg-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <Hero />
      </div>
      <Footer/>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
