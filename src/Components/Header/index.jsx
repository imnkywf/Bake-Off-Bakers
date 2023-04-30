import React, { Fragment, Suspense } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import './index.css'
import Routes from '../../Components/Routes'
import Loading from '../Loading'
export default function Header() {
  const routes = useRoutes(Routes)
  return (
    <Fragment>
      <div className="banner">
        <div className="container">
          <div className="header-nav">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="logo">
                  <a className="navbar-brand" href="index.html">Bake off Bakery <span>The Best Cake Bakery</span></a>
                </div>
              </div>

              <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="hvr-bounce-to-bottom"><NavLink className='links' to="home">Home</NavLink></li>
                  <li className="hvr-bounce-to-bottom"><NavLink className='links' to="about">About</NavLink></li>
                  <li className="hvr-bounce-to-bottom"><NavLink className='links' to="menu">Menu</NavLink></li>
                  <li className="hvr-bounce-to-bottom"><NavLink className='links' to="contact">Contact Us</NavLink></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className='content'>
        <Suspense fallback={<Loading />}>
          {routes}
        </Suspense>

      </div>
    </Fragment >
  )
}
