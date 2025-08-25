import React from 'react'
import "./Testimonia.scss"
import img from "../../assets/testimonia.png"
import img2 from "../../assets/tesitimonia2.png"
import katta from "../../assets/katta.svg"
import kichik from "../../assets/kichik.svg"

const Testimonia = () => {
    return (
        <section className="testimonia">
            <div className="container">
                <p>Testimonials</p>
                <h2>Word on the street</h2>
                <div className="testimonia-wrapper">
                    <div className="testimonia-wrapper__image">
                        <img src={img} alt="" />
                    </div>
                    <div className="testimonia-wrapper__body">
                        <img className="belgi" src={img2} alt="" />
                        <h2>Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.</h2>
                        <div>
                            <span>
                                <strong>John Frankin</strong>
                                <p>Founder, Double Bunch</p>
                            </span>
                            <button><img src={katta} alt="" />       <img src={kichik} alt="" /></button>
                        </div>
                    </div>
                </div>

            </div>
      </section>
  )
}

export default Testimonia