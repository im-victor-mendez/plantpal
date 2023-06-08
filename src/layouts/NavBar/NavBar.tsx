import './NavBar.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { NavBarPages } from '@pages/Pages'

export const pagesToHide = [
	'/',
	'/create-account',
	'/settings',
	'/login',
	'/forgot-password',
]

/**
 * Nav Bar
 * @description Bottom Nav Bar to use to navigate between pages.
 * @returns {React.JSX.Element}
 */
function NavBar(): React.JSX.Element | null {
	const location = useLocation()

	const isPageToHide = pagesToHide.includes(location.pathname)

	const MappedPages = NavBarPages.map((Page) => (
		<NavLink key={Page.name} to={Page.path} data-testid={Page.name}>
			<Page.icon />
		</NavLink>
	))

	if (isPageToHide) return null

	return (
		<nav id="nav-bar" data-testid="nav-bar">
			{MappedPages}
		</nav>
	)
}
export default NavBar
