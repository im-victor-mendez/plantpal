import { ThunkAction } from 'redux-thunk'
import {
	createUserWithEmailAndPassword,
	setPersistence,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import {
	AuthAction,
	SET_ERROR,
	SET_LOADING,
	SET_USER,
	SIGN_OUT,
	SignInData,
	SignUpData,
	User,
} from '../types'
import { RootState } from '../store'
import { auth, firestore, googleAuthProvider } from '../../Firebase'
import {
	collection,
	doc,
	getDoc,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore'

export function createUserWithEmail(
	data: SignUpData,
	onError: () => void
): ThunkAction<void, RootState, null, AuthAction> {
	return async (dispatch) => {
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)

			if (response.user) {
				const userData: User = {
					createdAt: serverTimestamp(),
					email: data.email,
					firstName: data.firstName,
					id: response.user.uid,
					image: null,
				}
				const collectionReference = collection(firestore, '/users')
				const documentReference = doc(collectionReference, response.user.uid)
				await setDoc(documentReference, userData)
				dispatch({ type: SET_USER, payload: userData })
			}
		} catch (error: any) {
			onError()
			dispatch({ type: SET_ERROR, payload: error.message })
		}
	}
}

export function loginWithEmail(
	data: SignInData
): ThunkAction<void, RootState, null, AuthAction> {
	return async (dispatch) => {
		try {
			const response = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)

			if (response.user) {
				const userData: User = {
					createdAt: response.user.metadata.creationTime,
					email: response.user.email || '',
					firstName: response.user.displayName || '',
					id: response.user.uid,
					image: null,
				}
				dispatch({ type: SET_USER, payload: userData })
			}
		} catch (error: any) {
			console.log(error)
			dispatch({ type: SET_ERROR, payload: error.message })
		}
	}
}

export function loginWithProvider(): ThunkAction<
	void,
	RootState,
	null,
	AuthAction
> {
	return async (dispatch) => {
		try {
			const response = await signInWithPopup(auth, googleAuthProvider)

			if (response.user) {
				const userData: User = {
					createdAt: response.user.metadata.creationTime,
					email: response.user.email || '',
					firstName: response.user.displayName || '',
					id: response.user.uid,
					image: response.user.photoURL,
				}

				const collectionReference = collection(firestore, '/users')
				// eslint-disable-next-line max-len
				const documentReference = doc(collectionReference, response.user.uid)
				// eslint-disable-next-line max-len
				const existsDocument = (await getDoc(documentReference)).exists()
				if (!existsDocument) await setDoc(documentReference, userData)
				dispatch({ type: SET_USER, payload: userData })
			}
		} catch (error: any) {
			dispatch({ type: SET_ERROR, payload: error.message })
		}
	}
}

export function getUserById(
	id: string
): ThunkAction<void, RootState, null, AuthAction> {
	return async (dispatch) => {
		try {
			const collectionReference = collection(firestore, '/users')
			const documentReference = doc(collectionReference, id)
			const user = await getDoc(documentReference)

			if (user.exists()) {
				const userData = user.data() as User

				dispatch({
					type: SET_USER,
					payload: userData,
				})
			}
		} catch (error: any) {
			dispatch({ type: SET_ERROR, payload: error.message })
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export function setLoading(
	value: boolean
): ThunkAction<void, RootState, null, AuthAction> {
	return (dispatch) => {
		dispatch({
			type: SET_LOADING,
			payload: value,
		})
	}
}

export function logOut(): ThunkAction<void, RootState, null, AuthAction> {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true))
			await signOut(auth)
			dispatch({ type: SIGN_OUT })
		} catch (error: any) {
			dispatch({ type: SET_ERROR, payload: error.message })
		}
		dispatch(setLoading(false))
	}
}

export function setError(
	message: string
): ThunkAction<void, RootState, null, AuthAction> {
	return (dispatch) => {
		dispatch({ type: SET_ERROR, payload: message })
	}
}

export function sendPasswordResetEmail(
	email: string
): ThunkAction<void, RootState, null, AuthAction> {
	return async (dispatch) => {
		try {
			sendPasswordResetEmail(email)
			console.log('sended')
		} catch (error: any) {
			console.log(error)
			dispatch(setError(error.message))
		}
	}
}
