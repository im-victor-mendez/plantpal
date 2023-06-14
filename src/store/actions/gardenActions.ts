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
import { CreateGardenData, Garden } from '@store/types'
import { v4 as uuid } from 'uuid'
import { slugify } from '@functions/string'

export function createGarden(data: CreateGardenData, userId: string) {
	return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
		try {
			const userDocRef = doc(firestore, 'users', userId)
			const userDocSnap = await getDoc(userDocRef)

			if (userDocSnap.exists()) {
				const gardenData: Garden = {
					description: data.description,
					id: uuid(),
					image: data.image,
					name: data.name,
					path: slugify(data.name),
					plants: [],
				}

				updateDoc(userDocRef, {
					gardens: arrayUnion(gardenData),
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
