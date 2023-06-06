import './NavBar.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { NavBarPages } from "../../pages/Pages"

const pagesToHide = ['/create-account', '/settings']

/**
 * Nav Bar
 * @description Bottom Nav Bar to use to navigate between pages.
 * @returns {React.JSX.Element}
 */
function NavBar(): React.JSX.Element | void {
  const location = useLocation()

  const isPageToHide = pagesToHide.includes(location.pathname)
  
  const MappedPages = NavBarPages.map(Page =>
    <NavLink key={Page.name} to={Page.path}>
        <Page.icon/>
    </NavLink>
  )
  
  if (!isPageToHide) return (
    <nav id="nav-bar">
        {MappedPages}
    </nav>
  )
}
export default NavBar