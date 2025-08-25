import React from 'react';
import './Footer.scss';
import logo from "../../assets/logoo.png"

const Footer = () => {
  return (
    <footer className="footer">
                <div className="container">
                    <h2>Ready to make some kickass?
                        <br />
                        <span>Let's get on a call.</span>
              </h2>
              <div className="footer-wrapper">
                  <div className="footer-body">
                      <img src={logo} alt="" />
                  </div>
                  <div className="footer-options">
                      <ul>
                          <li>About</li>
                          <li>Contact</li>
                          <li>Dribble</li>
                      </ul>
                      <ul>
                          <li>Service</li>
                          <li>Blog</li>
                          <li>Instagram</li>
                      </ul>
                      <ul>
                          <li>Experience</li>
                          <li>Projects</li>
                          <li>Twitter</li>
                      </ul>                      
                  </div>
                  
              </div>    
              <p>© All rights reserved.Sumit Hegde. Powered by Webflow/Image License Info/Instructions/Changelog/Style Guide</p>
                </div>
    </footer>
  );
};

export default Footer;