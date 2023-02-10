import React from 'react'


const Button = ({props}) => {
  return (
    <div className="pl-6">
        <a href="#">
            <button className="bg-primary text-white rounded-full m-2 px-8 py-4">
                {props}
            </button>
        </a>
    </div>
  )
}

export default Button