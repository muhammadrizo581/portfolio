import React from 'react'
import "./Hero.scss"
import {ReactComponent as heroimg} from "../../assets/hero.png"

const Hero = () => {
    return ( <section className="hero">
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-wrapper__body">
                    <h2>I design products
                        that delight and inspire people.
                    </h2>
                    <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                    <button>Book a call</button>                    
                </div>
                <div className="hero-wrapper__image">
                    <heroimg />
                </div>
            </div>
        </div>
  </section>
  )
}

export default Hero