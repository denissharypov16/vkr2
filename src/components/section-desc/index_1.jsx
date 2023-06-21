import React from 'react'
import "./section-desc.scss"
import ArrowOpacity from '../arrow-opacity'

export default function SectionDesc({ children, className = "" }) {
    return (
        <div className={`SectionDesc ${className}`}>
            <p>
                {
                    children
                }
            </p>

            <ArrowOpacity />
        </div>
    )
}
