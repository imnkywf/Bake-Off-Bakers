import { Navigate } from 'react-router-dom'
import Home from '../../Pages/Home'
import Contact from '../../Pages/Contact'
import About from '../../Pages/About'
import Menu from '../../Pages/Menu'


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