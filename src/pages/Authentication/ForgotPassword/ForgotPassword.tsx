import './ForgotPassword.scss'
import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import PlantPal, { Types as PlantPalTypes } from '@components/PlantPal/PlantPal'
import { sendPasswordResetEmail } from '@store/actions/authActions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {
	const [email, setEmail] = useState<string>('')
	const dispatch = useDispatch()
	const navigate = useNavigate()

	function sendEmail() {
		dispatch(sendPasswordResetEmail(email))
		navigate('/login')
	}

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
