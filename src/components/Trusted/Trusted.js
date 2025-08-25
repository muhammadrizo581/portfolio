import React from 'react'
import "./Trusted.scss"
import trusted from "../../assets/trusted.png"

const Trusted = () => {
    return (
        <section className="trusted">
            <div className="container">
                <div className="partner">
                    <p>Trusted by</p>
                    <img src={trusted} alt="" />
                </div>
            </div>    
        </section>
        
  )
}

export default Trusted