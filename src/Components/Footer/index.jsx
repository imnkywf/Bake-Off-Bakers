import React, { Fragment } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Fragment>
      {/* Footer */}
      <div className="footer">
        <div className="container">
          <div className="col-md-4 ftr_navi ftr">
            <h3>Explore</h3>
            <ul>
              <li><Link to='home'>Home</Link></li>
              <li><Link to='about'>About</Link></li>
              <li><Link to='menu'>Menu</Link></li>
              <li><Link to='contact'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 get_in_touch ftr">
            <h3>Get In Touch</h3>
            <p>1 Swan Lake Ave,</p>
            <p>Opera Estate, Singapore 455700</p>
            <p>+65 00112233</p>
            <a href="http://bakerOffBakery@gmail.com">bakerOffBakery@gmail.com</a>
          </div>
          <div className="col-md-3 ftr-logo">
            <a href="index.html">
              <h3>Bake Off Bakery <span> The Best Cake Bakery</span></h3>
            </a>
            <ul>
              <li><a target='_blank' rel='noreferrer' href="https://www.facebook.com/" className="facebook"> </a></li>
              <li><a target='_blank' rel='noreferrer' href="https://twitter.com/" className="twitter"> </a></li>
              <li><a target='_blank' rel='noreferrer' href="https://myaccount.google.com" className="google"> </a></li>
              <li><a target='_blank' rel='noreferrer' href="https://sg.linkedin.com/" className="linkedIn"> </a></li>
            </ul>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
