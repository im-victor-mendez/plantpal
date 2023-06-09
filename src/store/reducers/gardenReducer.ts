import {
	DELETE_GARDEN,
	GardenAction,
	GardenState,
	SET_GARDEN,
} from '@store/types'

const initialState: GardenState = {
	gardens: [],
}

function gardenReducer(state = initialState, action: GardenAction) {
	switch (action.type) {
		case SET_GARDEN:
			return {
				...state,
				gardens: [...state.gardens, action.payload],
			}

		case DELETE_GARDEN:
			return {
				...state,
				gardens: state.gardens.filter((item) => item.id !== action.payload),
			}

		// To implement UPDATE_GARDEN

		default:
			return state
	}
}

export default gardenReducer
