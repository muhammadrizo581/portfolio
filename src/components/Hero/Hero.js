import React from 'react'
import "./Hero.scss"
import heroimg from "../../assets/hero.png"

const Hero = () => {

    return (<section className="hero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-wrapper__body">
                    <h2><p>I design products</p>
                        that delight and inspire people.
                    </h2>
                    <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                    <div className="buttons-wrapper">
                        <button className="book">Book a call</button>
                        <button className="download">Download CV -></button>
                    </div>                    
                </div>
                <div className="hero-wrapper__image">
                    <img src={heroimg} alt="" />
                </div>
            </div>
        </div>
  </section>
  )
}

export default Hero