import { ThunkAction } from 'redux-thunk'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { AuthAction, NEED_VERIFICATION, SET_ERROR, SET_USER, SignUpData, User } from "../types"
import { RootState } from '../store'
import { auth, firestore } from '../../firebase'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'

// Create user
export function createUserWithEmail(data: SignUpData, onError: () => void): ThunkAction<void, RootState, null, AuthAction> {
    return async dispatch => {
        try {
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password)

            if (response.user) {
                const userData: User = {
                    createdAt: serverTimestamp(),
                    email: data.email,
                    firstName: data.firstName,
                    id: response.user.uid
                }
                const collectionReference = await collection(firestore, '/users')
                const documentReference = await doc(collectionReference, response.user.uid)
                await setDoc(documentReference, userData)
                await sendEmailVerification(response.user)
                dispatch({ type: NEED_VERIFICATION })
                dispatch({ type: SET_USER, payload: userData })

            }
        } catch (error) {
            console.log(error)
            onError()
            dispatch({ type: SET_ERROR, payload: error.message })
        }
    }
}