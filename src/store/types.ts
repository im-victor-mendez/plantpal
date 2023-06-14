import { Timestamp } from 'firebase/firestore'

/* Auth */
export const SET_USER = 'SET_USER'
export const SIGN_OUT = 'SIGN_OUT'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const NEED_VERIFICATION = 'NEED_VERIFICATION'
export const SET_SUCCESS = 'SET_SUCCESS'

export interface User {
	createdAt: Timestamp | string | undefined
	email: string | null
	gardens: Array<Garden>
	id: string
	image: string | null
	name: string | null
}

export interface AuthState {
	authenticated: boolean
	error: string
	loading: boolean
	needVerification: boolean
	success: string
	user: User | null
}

export interface SignUpData {
	email: string
	name: string
	password: string
}

export interface SignInData {
	email: string
	password: string
}

// Actions
interface SetUserAction {
	payload: User
	type: typeof SET_USER
}

interface SetLoadingAction {
	payload: boolean
	type: typeof SET_LOADING
}

interface SignOutAction {
	type: typeof SIGN_OUT
}

interface SetErrorAction {
	payload: string
	type: typeof SET_ERROR
}

interface NeedVerificationAction {
	type: typeof NEED_VERIFICATION
}

interface SetSuccessAction {
	payload: string
	type: typeof SET_SUCCESS
}

export type AuthAction =
	| SetUserAction
	| SetLoadingAction
	| SignOutAction
	| SetErrorAction
	| NeedVerificationAction
	| SetSuccessAction

/* Gardens */
export const SET_GARDEN = 'SET_GARDEN'
export const DELETE_GARDEN = 'DELETE_GARDEN'
export const UPDATE_GARDEN = 'UPDATE_GARDEN'

export interface Garden {
	description: string | null
	id: string
	image: unknown | string | null
	name: string
	path: string
	plants: Array<Plants>
}

export interface CreateGardenData {
	name: string
	description: string | null
	image: unknown | null
}

export interface Plants {
	acquisitionDate: unknown
	alias: string
	description: string
	id: string
	image: string | null
	location: unknown
	name: string
	path: string
	specieOrType: string
}
