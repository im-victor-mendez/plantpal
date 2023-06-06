import { ReactComponent as HomeIcon } from '../assets/svg/home.svg'
import CreateAccount from "./Authentication/CreateAccount"

interface Page {
    element: React.ReactNode
    name: string
    path: string
}

const Pages: Array<Page> = [
    {
        element: <CreateAccount/>,
        name: 'create-account',
        path: '/create-account'
    }
]

interface NavBarPage {
    element: React.ReactNode
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    name: string
    path: string
}

export const NavBarPages: Array<NavBarPage> = [
    {
        element: <></>,
        icon: HomeIcon,
        name: 'home',
        path: '/home'
    }
]

export default Pages