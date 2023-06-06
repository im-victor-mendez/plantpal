import './CreateAccount.scss'
import { useState } from "react"
import { useDispatch } from 'react-redux'
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"
import { createUserWithEmail, loginWithProvider } from "../../store/actions/authActions"
import PlantPal, { Types } from "../../components/PlantPal/PlantPal"
import { ReactComponent as GoogleIcon } from '../../assets/svg/google.svg'

function CreateAccount() {
    const [firstName, setFirstName] = useState<string>('second')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const dispatch = useDispatch()

    function createAccount() {
        dispatch(createUserWithEmail({ email, firstName, password }, () => console.log('Error')))
    }

    function alternativeMethod() {
        dispatch(loginWithProvider())
    }

    return (
        <main id="create-account" className='page'>
            <PlantPal type={Types.HORIZONTAL} />
            <section className="inputs">
                <Input placeholder="First Name" setValue={setFirstName}/>
                <Input placeholder="Email" setValue={setEmail} />
                <Input placeholder="Password" setValue={setPassword} />
            </section>
            <section className="main-buttons">
                <Button display={"Create Account"} functionality={createAccount} />
            </section>
            <section className='alternative-methods'>
                <div className='top'>
                    <p className='account'>Already have account?</p>
                    <div className='methods'>
                        <GoogleIcon onClick={alternativeMethod}/>
                    </div>
                </div>
                <p className='forgot-password'>Forgot password?</p>
            </section>
        </main>
    )
}
export default CreateAccount