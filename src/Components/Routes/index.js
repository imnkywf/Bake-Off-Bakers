import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../../Pages/Home'));
const Contact = lazy(() => import('../../Pages/Contact'));
const About = lazy(() => import('../../Pages/About'));
const Menu = lazy(() => import('../../Pages/Menu'));


const routes = [{
  path: 'home',
  element: <Home />
},
{
  path: 'contact',
  element: <Contact />
},
{
  path: 'menu',
  element: <Menu />
},
{
  path: 'about',
  element: <About />
},
{
  path: '',
  element: <Navigate to='home' />
}]

export default routes