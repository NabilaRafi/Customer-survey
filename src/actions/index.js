import * as ActionTypes from './action-types'

export const fetchDataRequest = () => ({
    type: ActionTypes.FETCHING_DATA_REQUEST
})

export const fetchDataSuccess = (response) => ({
    type:ActionTypes.FETCHING_DATA_SUCCESS,
    payload: response
})

export const fetchDataFailure = (error) => ({
    type:ActionTypes.FETCHING_DATA_FAILURE,
    payload: error
})

export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchDataRequest())
        try {
            let req = await fetch('/questions')
            let data = await req.json()
            dispatch(fetchDataSuccess(data))
        } catch(error) {
            dispatch(fetchDataFailure(error))
        }
    }
}

