/* eslint-disable max-len */
import './Pages.scss'
import { ReactComponent as HomeIcon } from '../assets/svg/home.svg'
import { ReactComponent as CalendarIcon } from '../assets/svg/calendar.svg'
import { ReactComponent as LeafIcon } from '../assets/svg/nature-ecology-leaf-environment-leaf-ecology-plant-plants-eco.svg'
import { ReactComponent as AccountIcon } from '../assets/svg/user.svg'
import CreateAccount from './Authentication/CreateAccount/CreateAccount'
import Account from './Account/Account'
import Settings from './Settings/Settings'

interface Page {
	element: React.ReactNode
	name: string
	path: string
}

const Pages: Array<Page> = [
	{
		element: <>To add Home Page</>,
		name: 'home',
		path: '/home',
	},
	{
		element: <>To add Calendar Page</>,
		name: 'calendar',
		path: '/calendar',
	},
	{
		element: <>To add Plants Page</>,
		name: 'plants',
		path: '/plants',
	},
	{
		element: <Account />,
		name: 'account',
		path: '/account',
	},
	{
		element: <CreateAccount />,
		name: 'create-account',
		path: '/create-account',
	},
	{
		element: <Settings />,
		name: 'settings',
		path: '/settings',
	},
]

interface NavBarPage {
	icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	name: string
	path: string
}

export const NavBarPages: Array<NavBarPage> = [
	{
		icon: HomeIcon,
		name: 'home',
		path: '/home',
	},
	{
		icon: CalendarIcon,
		name: 'calendar',
		path: '/calendar',
	},
	{
		icon: LeafIcon,
		name: 'plants',
		path: '/plants',
	},
	{
		icon: AccountIcon,
		name: 'account',
		path: '/account',
	},
]

export default Pages
