import * as ActionTypes from '../actions/action-types'

const initialState = {
    questions: [],
    errorMessage: ''
}

const rootReducer = (state = initialState, action) => {    
    switch (action.type) {
    case ActionTypes.FETCHING_DATA_REQUEST:
        return { ...state, ...action.payload }
    case ActionTypes.FETCHING_DATA_SUCCESS:
        return {...state, questions: action.payload }
    case ActionTypes.FETCHING_DATA_FAILURE: 
        return {...state, errorMessage: action.payload }       
    default:
      return state;
    
}
}

export default rootReducer