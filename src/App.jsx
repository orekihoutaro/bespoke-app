import React from 'react'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import Hero from './components/Hero'
import styles from './style'
import Footer from './components/Footer'
import ImgButton from './components/ImgButton'
import logo from './assets/logo.png'

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

      <div className="w-full h-full">
        <ImgButton img_src={logo} direct="home" props="My Bespoke Staff Marketing"/>
      </div>
      <Footer/>
      <WhatsAppFloatingButton />
    </div>
  )
}

export default App
