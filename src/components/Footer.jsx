import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'

const Footer = () => (
    <div className={`${styles.paddingX}`}>
      <div className={` ${styles.boxWidth} ${styles.paddingX}`}>
        <img src={ logo } alt="logo" className='w-[64px] h-[64px]'/>
      </div>
    </div>
  )


export default Footer