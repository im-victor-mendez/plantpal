import {
	configureStore,
	combineReducers,
	getDefaultMiddleware,
} from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'
import { useDispatch } from 'react-redux'

const reducer = combineReducers({
	auth: authReducer,
})

const middleware = getDefaultMiddleware({
	serializableCheck: false,
})

const store = configureStore({
	reducer,
	middleware,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof reducer>

export default store
