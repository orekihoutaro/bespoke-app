import React from 'react'


const Button = ({props, direct, img_src}) => {
  return (
    <div className="pl-6">
      
        <a href={direct}>
            <button className="bg-primary text-white font-semibold rounded-full m-2 px-8 py-4">
              {props}
            </button>
        </a>
    </div>
  )
}

export default Button