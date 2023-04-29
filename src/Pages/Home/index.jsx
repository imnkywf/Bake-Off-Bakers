import React, { Fragment } from 'react'
import './index.css'
import banner from '../../images/banner.jpg'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import BuildIcon from '@mui/icons-material/Build';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Home() {
  return (
    <Fragment>
      {/* Welcome Message */}
      <div className="banner-bottom">
        <div className="container">
          <h3>Welcome To Our Bakery !</h3>
          <p className="simple-desc">At our bakery, we are passionate about creating delicious treats that
            everyone can enjoy. Our baked goods are made with only the finest ingredients, and we take pride in
            offering a wide variety of options to satisfy any taste.</p>
          <div className="banner-bottom-grid">
            <img src={banner} alt=" " className="img-responsive" />
            <p>We're proud to offer a wide range of freshly baked goods to satisfy your sweet tooth.
              Our team of talented bakers use only the finest ingredients to create delicious treats
              that will leave you wanting more.</p>
          </div>
        </div>
      </div>

      {/* Welcome block */}
      <div className="welcome">
        <div className="container">
          <div className="welcome-grids">
            <div className=" welcome-grid-left">
              <h3>Welcome to our Bakery</h3>
              <p className="simple-desc">Indulge your senses with our delicious baked goods that </p>
              <div className="welcome-grid-left-grid">
                <div className="col-xs-4 welcome-grid-left-grid">
                  <img src={img2} alt=" " className="img-responsive" />
                </div>
                <div className="col-xs-8 welcome-grid">
                  <h4>Our Specialties</h4>
                  <p>From our famous cupcakes to our artisanal bread, we offer a
                    variety of baked goods that will satisfy any craving.</p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="welcome-grid-left-grid">
                <div className="col-xs-8 welcome-grid-left-grid">
                  <h4>Our Ingredients</h4>
                  <p>We use only the finest ingredients to ensure that our baked
                    goods are of the highest quality and taste delicious.</p>
                </div>
                <div className="col-xs-4 welcome-grid-left-grid fgh">
                  <img src={img3} alt=" " className="img-responsive" />
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="welcome-bottom">
        <div className="container">
          <h3>What We do</h3>
          <p className="simple-desc">Nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
          <div className="welcome-bottom-grids">
            <div className="col-md-3 welcome-bottom-grid">
              <div className="welcome-bottom-grd">
                <LocationOnIcon style={{ fontSize: '80px', color: 'white' }} />
              </div>
              <p>Our bakery is located in the heart of the city, where the aroma of freshly
                baked bread and pastries fills the air. Our central location makes it easy for
                customers to stop by and indulge in our delectable treats during their busy day.</p>
              <div className="more">
                <a target='_blank' rel='noreferrer' href="https://www.google.com/maps/place/Baker+%26+Cook+-+Swan+Lake/@1.3168943,103.9027674,15z/data=!4m10!1m2!2m1!1sbake+off+bakers!3m6!1s0x31da22ae72458b7d:0xb89a4458f111ef55!8m2!3d1.3209169!4d103.9242882!15sCg9iYWtlIG9mZiBiYWtlcnNaESIPYmFrZSBvZmYgYmFrZXJzkgEGYmFrZXJ5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJMT1VsUFJ6Wm5SUkFC4AEA!16s%2Fg%2F11b7rxgj2_" className="hvr-bounce-to-bottom">Learn More</a>
              </div>
            </div>
            <div className="col-md-3 welcome-bottom-grid">
              <div className="welcome-bottom-grd">
                <CrisisAlertIcon style={{ fontSize: '80px', color: 'white' }} />
              </div>
              <p>At Baker Off Bakery, our target is to provide our customers with the
                freshest and most delicious baked goods. We use only the highest quality
                ingredients attention into every detail to ensure that our customers always leave satisfied.</p>
              <div className="more">
                <a target='_blank' rel='noreferrer' href="https://www.google.com/maps/place/Baker+%26+Cook+-+Swan+Lake/@1.3168943,103.9027674,15z/data=!4m10!1m2!2m1!1sbake+off+bakers!3m6!1s0x31da22ae72458b7d:0xb89a4458f111ef55!8m2!3d1.3209169!4d103.9242882!15sCg9iYWtlIG9mZiBiYWtlcnNaESIPYmFrZSBvZmYgYmFrZXJzkgEGYmFrZXJ5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJMT1VsUFJ6Wm5SUkFC4AEA!16s%2Fg%2F11b7rxgj2_" className="hvr-bounce-to-bottom">Learn More</a>
              </div>
            </div>
            <div className="col-md-3 welcome-bottom-grid">
              <div className="welcome-bottom-grd">
                <BuildIcon style={{ fontSize: '80px', color: 'white' }} />
              </div>
              <p>At Baker of Bakery, we pride ourselves on providing top-notch bakery
                services to our customers. Our skilled bakers
                use only the finest ingredients and baking techniques to create delicious
                treats that will leave you wanting more. </p>
              <div className="more">
                <a target='_blank' rel='noreferrer' href="https://www.google.com/maps/place/Baker+%26+Cook+-+Swan+Lake/@1.3168943,103.9027674,15z/data=!4m10!1m2!2m1!1sbake+off+bakers!3m6!1s0x31da22ae72458b7d:0xb89a4458f111ef55!8m2!3d1.3209169!4d103.9242882!15sCg9iYWtlIG9mZiBiYWtlcnNaESIPYmFrZSBvZmYgYmFrZXJzkgEGYmFrZXJ5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJMT1VsUFJ6Wm5SUkFC4AEA!16s%2Fg%2F11b7rxgj2_" className="hvr-bounce-to-bottom">Learn More</a>
              </div>
            </div>
            <div className="col-md-3 welcome-bottom-grid">
              <div className="welcome-bottom-grd">
                <FilterAltIcon style={{ fontSize: '80px', color: 'white' }} />
              </div>
              <p>At our bakery, we believe that quality is paramount. From the
                ingredients and attentions that we use to the techniques we employ, every aspect of our
                baking process is focused on delivering the highest quality products to our customers. </p>
              <div className="more">
                <a target='_blank' rel='noreferrer' href="https://www.google.com/maps/place/Baker+%26+Cook+-+Swan+Lake/@1.3168943,103.9027674,15z/data=!4m10!1m2!2m1!1sbake+off+bakers!3m6!1s0x31da22ae72458b7d:0xb89a4458f111ef55!8m2!3d1.3209169!4d103.9242882!15sCg9iYWtlIG9mZiBiYWtlcnNaESIPYmFrZSBvZmYgYmFrZXJzkgEGYmFrZXJ5mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJMT1VsUFJ6Wm5SUkFC4AEA!16s%2Fg%2F11b7rxgj2_" className="hvr-bounce-to-bottom">Learn More</a>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
