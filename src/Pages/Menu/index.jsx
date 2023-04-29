import React, { Fragment } from 'react'
import './index.css'
import img10 from '../../images/10.jpg'
import img11 from '../../images/11.jpg'
import img16 from '../../images/16.jpg'
import img17 from '../../images/17.jpg'
import img18 from '../../images/18.jpg'

export default function Menu() {
  return (
    <Fragment>
      <div className="menu">
        <div className="container">
          <h3>Menu</h3>
          <p className="nihil">Nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
          <div className="menu-grids">
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src="images/14.jpg" alt=" " className="img-responsive" />
                <h4>dolorem eum fugiat</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src="images/11.jpg" alt=" " className="img-responsive" />
                <h4>dolorem eum fugiat</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src="images/10.jpg" alt=" " className="img-responsive" />
                <h4>dolorem eum fugiat</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="dinner">
            <div className="dinner-info">
              <h3>Dessert Special</h3>
              <div className="dinner-info-grid">
                <h4>dolor in reprehenderit voluptate</h4>
                <p>Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus.<span>$45</span></p>
              </div>
              <div className="dinner-info-grid">
                <h4>dolor in reprehenderit voluptate</h4>
                <p>Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus.<span>$45</span></p>
              </div>
            </div>
          </div>
          <div className="menu-grids">
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src="images/16.jpg" alt=" " className="img-responsive" />
                <h4>dolorem eum fugiat</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src="images/17.jpg" alt=" " className="img-responsive" />
                <h4>dolorem eum fugiat</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src="images/18.jpg" alt=" " className="img-responsive" />
                <h4>dolorem eum fugiat</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
