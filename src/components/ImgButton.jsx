import React from 'react'


const Button = ({props, direct, img_src}) => {
  return (
    <div className="pl-6 w-1/4">
        <a href={direct}>
            <button className="bg-primary text-white rounded-full m-2 px-8 py-4 flex flex-row">
              <div className="p-2">
                <img src={img_src} alt="" className="w-[96px] h-[64px]"/>
              </div>
              <p className="p-4 font-semibold">
                {props}
              </p>
            </button>
        </a>
    </div>
  )
}

export default Button