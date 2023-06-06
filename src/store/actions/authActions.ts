import { ThunkAction } from 'redux-thunk'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import {
    AuthAction, SET_ERROR, SET_LOADING, SET_USER, SignUpData, User
} from "../types"
import { RootState } from '../store'
import { auth, firestore, googleAuthProvider } from '../../firebase'
import {
    collection, doc, getDoc, serverTimestamp, setDoc
} from 'firebase/firestore'

export function createUserWithEmail(data: SignUpData, onError: () => void):
ThunkAction<void, RootState, null, AuthAction> {
    return async dispatch => {
        try {
            const response = await createUserWithEmailAndPassword(
                auth, data.email, data.password
            )

            if (response.user) {
                const userData: User = {
                    createdAt: serverTimestamp(),
                    email: data.email,
                    firstName: data.firstName,
                    id: response.user.uid
                }
                const collectionReference = collection(firestore, '/users')
                const documentReference = doc(
                    collectionReference, response.user.uid
                )
                await setDoc(documentReference, userData)
                dispatch({ type: SET_USER, payload: userData })

            }
        } catch (error: any) {
            console.log(error)
            onError()
            dispatch({ type: SET_ERROR, payload: error.message })
        }
    }
}

export function loginWithProvider():
ThunkAction<void, RootState, null, AuthAction> {
    return async dispatch => {
        try {
            const response = await signInWithPopup(auth, googleAuthProvider)
            
            if (response.user) {
                const userData: User = {
                    createdAt: response.user.metadata.creationTime,
                    email: response.user.email || '',
                    firstName: response.user.displayName || '',
                    id: response.user.uid
                }
                
                const collectionReference = collection(firestore, '/users')
                const documentReference = doc(
                    collectionReference, response.user.uid
                )
                const existsDocument = (await getDoc(documentReference))
                .exists()
                if (!existsDocument) await setDoc(documentReference, userData)
                dispatch({ type: SET_USER, payload: userData })
            }
        } catch (error: any) {
            console.log(error)
            dispatch({ type: SET_ERROR, payload: error.message })
        }
    }
}

export function getUserById(id: string):
ThunkAction<void, RootState, null, AuthAction> {
    return async dispatch => {
        try {
            const collectionReference = collection(firestore, '/users')
            const documentReference = doc(collectionReference, id)
            const user = await getDoc(documentReference)

            if (user.exists()) {
                const userData = user.data() as User
                dispatch({
                    type: SET_USER,
                    payload: userData
                })
            }
        } catch (error) {
            console.log(error)
        }

        dispatch(setLoading(false))
    }
}

export function setLoading(value: boolean):
ThunkAction<void, RootState, null, AuthAction> {
    return dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }
}