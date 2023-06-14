import { Action } from '@reduxjs/toolkit'
import { RootState } from '@store/store'
import {
	FirestoreError,
	arrayUnion,
	doc,
	getDoc,
	updateDoc,
} from 'firebase/firestore'
import { ThunkDispatch } from 'redux-thunk'
import { setError } from './authActions'
import { firestore } from '@Firebase/index'
import { CreateGardenData } from '@store/types'

export function createGarden(data: CreateGardenData, userId: string) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			const userDocRef = doc(firestore, 'users', userId)
			const userDocSnap = await getDoc(userDocRef)

			if (userDocSnap.exists()) {
				updateDoc(userDocRef, {
					gardens: arrayUnion(data),
				}).then(() => {
					window.location.reload()
				})
			}
		} catch (error) {
			if (error instanceof FirestoreError) {
				console.log('Error trying to create garden = ', error.message)
				dispatch(setError(error.message))
			}
		}
	}
}
