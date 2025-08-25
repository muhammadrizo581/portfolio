import React from 'react'
import "./Services.scss"
import img from "../../assets/service1.svg"
import img2 from "../../assets/service2.svg"
import img3 from "../../assets/service3.svg"

const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <p>Services</p>
                <h2>Design that solves problems, one product at a time.</h2>
                <div className="cards-wrapper">
                    <div className="card">
                        <img src={img} alt="" />
                        <h2>What I can do for you</h2>
                        <p>Faster, better products that your users love. Here's all the services I provide:</p>
                        <ul>
                            <li>Design strategy</li>
                            <li>Web and Mobile App Design</li>
                            <li>Front-end Development</li>
                        </ul>
                    </div>
                    <div className="card">
                        <img src={img2} alt="" />
                        <h2>Applications I'm fluent in</h2>
                        <p>Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.</p>
                        <ul>
                            <li>Sketch</li>
                            <li>Webflow</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className="card">
                        <img src={img3} alt="" />
                        <h2>What you can expect</h2>
                        <p>I design products that are more than pretty. I make them shippable and usable.</p>
                        <ul>
                            <li>Clean and functional</li>
                            <li>Device and user friendly</li>
                            <li>Efficient and maintainable</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Services