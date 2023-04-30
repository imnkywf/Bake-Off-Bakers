import React, { Fragment } from 'react'
import './index.css'
import img7 from '../../images/7.jpg'
import img8 from '../../images/8.jpg'
import img9 from '../../images//9.jpg'
import img10 from '../../images/10.jpg'
import img11 from '../../images/11.jpg'
import img12 from '../../images/12.jpg'
import img13 from '../../images/13.jpg'

export default function About() {
  return (
    <Fragment>
      {/* About */}
      <div className="about">
        <div className="container">
          <div className="about-grids">
            <div className="col-md-4 about-grid">
              <h3>Healthy Ingredients</h3>
              <img src={img7} alt=" " className="img-responsive" />
              <p>Fruits like berries, apples, and bananas are a great source
                of vitamins, antioxidants, and fiber. They can be used to
                sweeten baked goods naturally, without adding refined sugars.</p>
            </div>
            <div className="col-md-4 about-grid">
              <h3>Tasty Products</h3>
              <img src={img8} alt=" " className="img-responsive" />
              <p className="commodo">At our bakery, we believe that baked goods should
                not only look beautiful, but taste incredible as well. That's why we use
                only the finest ingredients and take great care in crafting each and
                every one of our products. </p>
            </div>
            <div className="col-md-4 about-grid">
              <h3>Nice Presentation</h3>
              <img src={img9} alt=" " className="img-responsive" />
              <p className="sint">A nice presentation is one that is engaging,
                informative, and visually appealing. It captures the attention of the
                audience and effectively conveys the message or information being presented.</p>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

      <div className="why-choose">
        <div className="container">
          <h3>We Provide Excellent Quality</h3>
          <div className="why-choose-grids">
            <div className="col-md-6 why-choose-grid">
              <div className="why-choose-grid-hover">
                <p>History</p>
              </div>
              <div className="why-choose-grds">
                <div className="col-xs-5 why-choose-grd">
                  <img src={img10} alt=" " className="img-responsive" />
                </div>
                <div className="col-xs-7 why-choose-grd-right">
                  <h4>Since 1995</h4>
                  <p>Our bakery was founded in 1995 by Jane Smith, a passionate baker with a
                    love for all things sweet.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-6 why-choose-grid">
              <div className="why-choose-grid-hover">
                <p>Values</p>
              </div>
              <div className="why-choose-grds">
                <div className="col-xs-5 why-choose-grd">
                  <img src={img11} alt=" " className="img-responsive" />
                </div>
                <div className="col-xs-7 why-choose-grd-right">
                  <h4>Our values is to provice excellent products</h4>
                  <p>We believe in using ingredients and packaging that are eco-friendly and minimize waste.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="why-choose-grids">
            <div className="col-md-6 why-choose-grid">
              <div className="why-choose-grid-hover">
                <p>Mission</p>
              </div>
              <div className="why-choose-grds">
                <div className="col-xs-5 why-choose-grd">
                  <img src={img12} alt=" " className="img-responsive" />
                </div>
                <div className="col-xs-7 why-choose-grd-right">
                  <h4>Provice excellent products</h4>
                  <p>Our mission is to create delicious baked goods that bring joy
                    to our customers.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="col-md-6 why-choose-grid">
              <div className="why-choose-grid-hover">
                <p>Team</p>
              </div>
              <div className="why-choose-grds">
                <div className="col-xs-5 why-choose-grd">
                  <img src={img13} alt=" " className="img-responsive" />
                </div>
                <div className="col-xs-7 why-choose-grd-right">
                  <h4>Well-trained Team</h4>
                  <p>Our well-trained team is dedicated to providing exceptional service
                    and creating high-quality products that our customers love.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
