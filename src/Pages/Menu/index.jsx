import React, { Fragment } from 'react'
import './index.css'
import img10 from '../../images/10.jpg'
import img11 from '../../images/11.jpg'
import img14 from '../../images/14.jpg'
import img16 from '../../images/16.jpg'
import img17 from '../../images/17.jpg'
import img18 from '../../images/18.jpg'

export default function Menu() {
  return (
    <Fragment>
      <div className="menu">
        <div className="container">
          <h3>Menu</h3>
          <p className="simple-desc"> Our menu features a wide range of items, including cakes, pastries, bread, cookies, and cupcakes,
            each one made with the finest ingredients and the most care. </p>
          <div className="menu-grids">
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src={img14} alt=" " className="img-responsive" />
                <h4>Chocolate Muffin</h4>
                <p>Indulge in the rich and decadent flavor of our chocolate muffin,
                  the perfect treat to satisfy your sweet tooth cravings. Made with the
                  finest ingredients, including cocoa powder, eggs, milk, and butter, our
                  chocolate muffin has a soft and moist texture, with a slightly crispy top.</p>
                <div className="menu-grd-pos">
                  <p>$8</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src={img11} alt=" " className="img-responsive" />
                <h4>Chocolate Cake</h4>
                <p>Our chocolate cake features layers of rich, moist chocolate cake, filled with a
                  smooth and creamy chocolate ganache, and finished with a luscious chocolate
                  buttercream frosting.</p>
                <div className="menu-grd-pos">
                  <p>$35</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src={img10} alt=" " className="img-responsive" />
                <h4>Strawberry Cake</h4>
                <p>Our strawberry cake is made with the freshest and juiciest strawberries, combined with a light and
                  fluffy cake base, and topped with a smooth and creamy frosting.</p>
                <div className="menu-grd-pos">
                  <p>$35</p>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="dinner">
            <div className="dinner-info">
              <h3>Dessert Special</h3>
              <div className="dinner-info-grid">
                <h4>Strawberry Shortcake</h4>
                <p> A classic dessert that is perfect for
                  the summer season! Our strawberry shortcake
                  features layers of fluffy vanilla cake,
                  fresh and juicy strawberries, and a dollop of whipped cream.
                  <span>$25</span></p>
              </div>
              <div className="dinner-info-grid">
                <h4>Chocolate Fudge Brownie Sundae</h4>
                <p>Our chocolate fudge brownie sundae features a
                  warm and gooey fudge brownie, topped with a
                  scoop of vanilla ice cream, drizzled with hot
                  fudge sauce, and sprinkled with chopped nuts.
                  <span>$15</span></p>
              </div>
            </div>
          </div>
          <div className="menu-grids">
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src={img16} alt=" " className="img-responsive" />
                <h4>Black Forest Cake</h4>
                <p>This classic German cake is made with layers of
                  rich chocolate sponge cake, infused with a hint
                  of cherry brandy and filled with layers of whipped
                  cream and cherry filling.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src={img17} alt=" " className="img-responsive" />
                <h4>Chocolate Cupcake</h4>
                <p>Our chocolate cupcake features a rich and moist
                  chocolate cake base, topped with a creamy and decadent
                  chocolate frosting, and finished with a sprinkle of
                  chocolate shavings.</p>
                <div className="menu-grd-pos">
                  <p>$15</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 menu-grid">
              <div className="menu-grd">
                <img src={img18} alt=" " className="img-responsive" />
                <h4>Caramel Cream Cake</h4>
                <p>Our caramel cream cake features a soft and moist
                  sponge cake layered with a rich and creamy caramel filling,
                  then topped with a generous drizzle of caramel.</p>
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
