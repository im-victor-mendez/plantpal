import './ForgotPassword.scss'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import Loading from '@components/Loading/Loading'
import PlantPal, { Types as PlantPalTypes } from '@components/PlantPal/PlantPal'
import { sendPasswordResetEmail } from '@store/actions/authActions'
import { RootState, useAppDispatch } from '@store/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
	const [email, setEmail] = useState<string>('')
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { loading } = useSelector((state: RootState) => state.auth)

	function sendEmail() {
		dispatch(sendPasswordResetEmail(email))
		navigate('/login')
	}

	if (loading) return <Loading />

	return (
		<main id="forgot-password" className="page">
			<PlantPal type={PlantPalTypes.HORIZONTAL} />
			<p id="instructions" data-testid="instructions">
				Provide your email to send a message to reset your password
			</p>
			<Input placeholder={'Email'} setValue={setEmail} />
			<Button display={'Send Email'} functionality={sendEmail} />
		</main>
	)
}
export default ForgotPassword
