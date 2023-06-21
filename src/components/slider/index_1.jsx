import React from 'react'
import "./slider.scss"

export default function Slider({className = "", children}) {
  return (
    <div className={`Slider ${className}`} >
        {
            children
        }
    </div>
  )
}
