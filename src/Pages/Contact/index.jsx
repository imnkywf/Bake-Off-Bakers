import React, { Fragment } from 'react'
import './index.css'

export default function Contact() {
  const onsubmit = (e) => {
    e.preventDefault()
    alert('Submit Successful')
  }
  return (
    <Fragment>
      <div className="contact">
        <div className="container">
          <div className="col-md-5 contact-left">
            <h3>Address</h3>
            <p>1 Swan Lake Ave, Opera Estate, Singapore 455700
              <span> +65 00112233</span>
            </p>
            <ul>
              <li>Free Phone :+65 00112233</li>
              <li>Telephone :+65 00112234</li>
              <li>Fax :+65 00112231</li>
              <li><a href="http://bakerOffBakery@gmail.com">bakerOffBakery@gmail.com</a></li>
            </ul>
          </div>
          <div className="col-md-7 contact-left">
            <h3>Contact Form</h3>
            <form>
              <input type="text" name="Name" required="" placeholder='Name' />
              <input type="email" name="Email" required="" placeholder='email' />
              <input type="text" name="Telephone" required="" placeholder='text' />
              <textarea defaultValue="Message"></textarea>
              <input type="submit" onClick={onsubmit} value='Submit' />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>


      <div className="contact-bottom">
        <iframe title='map'
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d45208.65286612783!2d1.2133568000000001!3d44.91233665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scakes+shop+in+Sarlat-la-Can%C3%A9da%2C+France!5e0!3m2!1sen!2sin!4v1441434100434"
          style={{ border: 0 }} allowFullScreen></iframe>
      </div>
    </Fragment>
  )
}
