import React from 'react'
import "./link.scss"

export default function Url(props) {
    const { href, text,children, classes } = props
    return (
        <a href={href} className={classes} target='_blank' rel="noreferrer">{text || children}</a>
    )
}