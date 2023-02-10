import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
import fb_logo from '../assets/fb_logo.png'




const Footer = () =>  {
    const handleClick = () => {
        window.open("www.facebook.com/MyBespokeStaff", "_blank")
    }
    return(
        <div className={`${styles.paddingY}`}>
            <div className={` ${styles.boxWidth} pl-8`}>
                <a href='/home'>
                    <img src={ logo } alt="logo" className='w-[145px] h-[145px] cursor-pointer'/>
                </a>
            </div>
        <div className={`${styles.boxWidth} pl-10 pt-4`}>
            <button onClick={handleClick}>
                <img src={ fb_logo } alt="fb_logo" className="w-[32px] h-[32px]"/>
            </button>
        </div>
        </div>
    )
}

export default Footer