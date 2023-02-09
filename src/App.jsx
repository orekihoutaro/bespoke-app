import React from 'react'
import Navbar from './components/Navbar'
import styles from './style'

function App() {

  return (
    <div className="bg-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App
