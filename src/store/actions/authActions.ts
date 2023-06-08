/* eslint-disable max-len */
import { ThunkDispatch } from 'redux-thunk'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import {
	SET_ERROR,
	SET_LOADING,
	SET_SUCCESS,
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
import { Action } from '@reduxjs/toolkit'
import { FirebaseError } from 'firebase/app'

export function createUserWithEmail(data: SignUpData) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
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
				dispatch({ type: SET_SUCCESS, payload: true })
			}
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log('Error Creating User With Email:', error)
				dispatch(setError(error.message))
			}
		}
	}
}

export function loginWithEmail(data: SignInData) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
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
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log('Error Logging User With Email:', error)
				dispatch(setError(error.message))
			}
		}
	}
}

export function loginWithProvider() {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
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

				const documentReference = doc(collectionReference, response.user.uid)

				const existsDocument = (await getDoc(documentReference)).exists()
				if (!existsDocument) await setDoc(documentReference, userData)
				dispatch({ type: SET_USER, payload: userData })
			}
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log('Error Logging With Provider:', error)
				dispatch(setError(error.message))
			}
		}
	}
}

export function getUserById(id: string) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
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
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log('Error Getting By Id:', error)
				dispatch(setError(error.message))
			}
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export function setLoading(value: boolean) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		dispatch({
			type: SET_LOADING,
			payload: value,
		})
	}
}

export function logOut() {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			await signOut(auth)
			dispatch({ type: SIGN_OUT })
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log('Error to try Log Out user:', error)
				dispatch(setError(error.message))
			}
		} finally {
			dispatch(setLoading(false))
		}
	}
}

export function setError(message: string) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		dispatch({ type: SET_ERROR, payload: message })
	}
}

export function sendPasswordResetEmail(email: string) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			sendPasswordResetEmail(email)
			console.log('Email to restore password')
		} catch (error: unknown) {
			if (error instanceof FirebaseError) {
				console.log('Error sending Password Reset Email:', error)
				dispatch(setError(error.message))
			}
		}
	}
}
