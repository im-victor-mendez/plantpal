import './Account.scss'
import { useSelector } from "react-redux"
import { Settings } from "../../components/Top/Top"
import { RootState } from "../../store/store"
import { ReactComponent as AccountIcon } from '../../assets/svg/user.svg'

function Account() {
    const { user } = useSelector((state: RootState) => state.auth)
    const name = user?.firstName
    const image = user?.image

    return (
        <main id="account" className='page'>
            <Settings/>
            <article id="account-info">
                {image ?
                    <img
                        id='account-image'
                        src={`${image}`}
                        alt={`${name} account image`}
                        referrerPolicy="no-referrer"
                    /> :
                    <div className='no-image'>
                        <AccountIcon
                            className='icon'
                        />
                    </div>
                }
                <h1 id='account-name'>{name}</h1>
            </article>
        </main>
    )
}

export default Account