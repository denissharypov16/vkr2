import React, { useState } from 'react'
import "./arrow-opacity.scss"
import Arrow from "./../../images/icons/arrow-down-icon.svg"

export default function ArrowOpacity() {
    const [handle, setHandle] = useState(false)
    const HandleFunc = () =>{
        setHandle(handle => !handle)
    }
    return (
        <div className={`ArrowOpacity ${handle ? "hidden" : ""}`}>
            <button onClick={HandleFunc} className='ArrowOpacity__button'>
                <img className={handle ? "deg" : ""} src={Arrow} alt="Error" />
            </button>
        </div>
    )
}
