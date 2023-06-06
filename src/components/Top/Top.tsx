import './Top.scss'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../../assets/svg/arrow-back-ios.svg'
import { ReactComponent as SettingsIcon } from '../../assets/svg/settings.svg'
import { ReactNode } from 'react'

const className = 'top'

export enum TopTypes {
    DEFAULT = className,
    BACK = `${className} back`,
    BACK_WITH_SETTINGS = `${className} back-settings`,
    SETTINGS = `${className} top-settings`
}

interface TopProps {
    children: ReactNode
    type: TopTypes
}

function Top({ children, type = TopTypes.DEFAULT }: TopProps):
React.JSX.Element {
  return (
    <section className={type}>
        {children}
    </section>
  )
}

/**
 * Back
 * @description Back browser functionality
 */
function back() {
    window.history.back()
}

export function Back({ children, type = TopTypes.BACK }: TopProps):
React.JSX.Element {
    return (
        <Top type={type}>
            <BackIcon onClick={back}/>
            {children}
        </Top>
    )
}

export function BackWithSettings(): React.JSX.Element {
    const navigate = useNavigate()

    function settings() {
        navigate('/settings')
    }

    return (
        <Back type={TopTypes.BACK_WITH_SETTINGS}>
            <SettingsIcon
                className='settings'
                onClick={settings}
            />
        </Back>
    )
}

export function Settings() {
    const navigate = useNavigate()

    function settings() {
        navigate('/settings')
    }

    return (
        <Top type={TopTypes.SETTINGS} >
            <SettingsIcon
            className='settings'
                onClick={settings}
            />
        </Top>
    )
}

export default Top