import { useDispatch } from "react-redux"
import Button from "../../components/Button/Button"
import { logOut } from "../../store/actions/authActions"
import { useNavigate } from "react-router-dom"
import { Back, TopTypes } from "../../components/Top/Top"

function Settings() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function logout() {
        dispatch(logOut())
        navigate('/')
    }
  return (
    <main id="settings" className="page">
      <Back type={TopTypes.BACK} children={undefined}/>
      <Button
          display="Log Out"
          functionality={logout}
      />
    </main>
  )
}
export default Settings