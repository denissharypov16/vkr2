import React from 'react'
import "./container.scss"


export default function Container({ children, className = "" }) {
    return (
        <div className={`Container ${className}`}>{children}</div>
    )
}
