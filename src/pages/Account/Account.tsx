import './Account.scss'
import { useSelector } from 'react-redux'
import { Settings } from '@components/Top/Top'
import { RootState } from '@store/store'
import { ReactComponent as AccountIcon } from '@assets/svg/user.svg'
import Button from '@components/Button/Button'
import { useNavigate } from 'react-router-dom'

/**
 * Account
 * @description Account page
 * @returns {React.JSX.Element}
 */
function Account(): React.JSX.Element {
	const { user } = useSelector((state: RootState) => state.auth)
	const name = user?.firstName
	const image = user?.image

	return (
		<main id="account" className="page">
			{user && <Settings />}
			{user ? <AccountInfo image={image} name={name} /> : <NoAccount />}
		</main>
	)
}

interface AccountInfo {
	image: string | null | undefined
	name: string | null | undefined
}

/**
 * Account Info
 * @description To use when user was logged.
 * @param image Image profile url
 * @param name User name
 * @returns {React.JSX.Element}
 */
function AccountInfo({ image, name }: AccountInfo): React.JSX.Element {
	return (
		<article id="account-info" data-testid="account-info">
			<div className="account-top">
				<img
					id="account-image"
					src={`${image}`}
					alt={`${name} account image`}
					referrerPolicy="no-referrer"
				/>

				<h1 id="account-name">{name}</h1>
			</div>
		</article>
	)
}

/**
 * No Account
 * @description To use when user isn't logged
 * @returns {React.JSX.Element}
 */
function NoAccount(): React.JSX.Element {
	const navigate = useNavigate()

	function logIn() {
		navigate('/login')
	}

	function createAccount() {
		navigate('/create-account')
	}

	return (
		<article id="no-account" data-testid="no-account">
			<section className="account-top">
				<div className="no-image" data-testid="no-image">
					<AccountIcon className="icon" />
				</div>
				<h1
					className="message"
					data-testid="message"
				>{`You're not logged :(`}</h1>
			</section>
			<section className="actions">
				<Button display={'Log In'} functionality={logIn} />
				<p>Or</p>
				{/* eslint-disable-next-line max-len */}
				<Button display={'Create Account :D'} functionality={createAccount} />
			</section>
		</article>
	)
}

export default Account
