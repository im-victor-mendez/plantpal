import { useEffect } from 'react'
import removeDOMLoader from './functions/removeDOMLoader'
import Router from './pages/Router'
import NavBar from './layouts/NavBar/NavBar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from './store/store'
import { getUserById, setLoading } from './store/actions/authActions'

function App() {
	const dispatch = useAppDispatch()
	const { loading } = useSelector((state: RootState) => state.auth)

	useEffect(() => {
		removeDOMLoader()

		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			dispatch(setLoading(true))
			if (user) dispatch(getUserById(user.uid))
			dispatch(setLoading(false))
		})

		return () => {
			unsubscribe()
		}
	}, [dispatch])

	if (loading) return <>Loading</>

	return (
		<>
			<Router />
			<NavBar />
		</>
	)
}

export default App
