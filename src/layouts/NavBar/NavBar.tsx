import './NavBar.scss'
import { NavLink } from 'react-router-dom'
import Pages from "../../pages/Pages"

/**
 * Nav Bar
 * @description Bottom Nav Bar to use to navigate between pages.
 * @returns {React.JSX.Element}
 */
function NavBar(): React.JSX.Element {
  const MappedPages = Pages.map(Page =>
    <NavLink to={Page.path}>
        <Page.icon/>
    </NavLink>
  )
  
  return (
    <nav id="nav-bar">
        {MappedPages}
    </nav>
  )
}
export default NavBar