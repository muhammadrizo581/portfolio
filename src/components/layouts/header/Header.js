import React from 'react'
import "./Header.scss"
import {ReactComponent as Logoo} from "../../../assets/logo.svg"


const Header = () => {
const navbarOptions = ["About", "Services", "Projects", "Blog", "Book a call->"];
    return (
        <section className="navbar">
            <div className="container">
                <div className="navbar-wrapper">
                    <Logoo className="navbar-image" />
                    <ul className="navbar-options">
                        {navbarOptions.map((item, index) => (
                            <li key={index}>
                                <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                                    <span>{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>                
        </div>
  </section>    
  )
}

export default Header