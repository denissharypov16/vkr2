import React from 'react'
import "./heading.scss"

export default function Heading(props) {
    const { heading = "p", classes = "", children } = props
    switch (heading) {
        case "h1":
            return <h1 className={"title "+classes} >{children}</h1>
            
        case "h2":
            return <h2 className={"title-2 "+classes} >{children}</h2>
            
        case "h3":
            return <h3 className={"title-3 "+classes} >{children}</h3>
            
        case "h4":
            return <h4 className={"title-4 "+classes} >{children}</h4>
            
        case "h5":
            return <h5 className={"title-5 "+classes} >{children}</h5>
            
        case "h6":
            return <h6 className={"title-6 "+classes} >{children}</h6>
            
        case "p":
            return <p className={"paragraph-title "+classes} >{children}</p>
            
        default:
            alert("Error")
            
    }
}
