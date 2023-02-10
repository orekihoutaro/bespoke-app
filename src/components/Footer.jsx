import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
import fb_logo from '../assets/fb_logo.png'
import linkedin_logo from '../assets/linkedin_logo.png'

const Footer = () =>  {
    const handleFBClick = () => {
        window.open("www.facebook.com/MyBespokeStaff", "_blank")
    }

    const handleLnClick = () => {
        window.open("www.linkedin.com/mybespokestaff", "_blank")
    }
    return(
        <div className={`p-1`}>
            <div className={` ${styles.boxWidth} px-6`}>
                <a href='/home'>
                    <img src={ logo } alt="logo" className='w-[145px] h-[145px] cursor-pointer'/>
                </a>
            </div>
            <div className={`${styles.boxWidth} flex flex-row w-[8%]`}>
                <div className={`${styles.boxWidth} pl-6 pt-4`}>
                    <button onClick={handleFBClick}>
                        <img src={ fb_logo } alt="fb_logo" className="w-[32px] h-[32px]"/>
                    </button>
                </div>
                <div className={`${styles.boxWidth} pl-6 pt-4`}>
                    <button onClick={handleLnClick}>
                        <img src={ linkedin_logo } alt="linked_logo" className="w-[32px] h-[32px]"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer