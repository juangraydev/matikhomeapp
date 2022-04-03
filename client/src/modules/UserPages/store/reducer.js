import * as types from './actionTypes';
const initialState = {
    isPending: false,
    data: [],
    error: ''
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case types.FETCH_DASHBOARD:
            return{
                ...state,
                isPending: true,
            }
        case types.SUCCESS_DASHBOARD:
            return{
                ...state,
                isPending: false,
                data: payload
            }
        case types.FAIL_DASHBOARD:
            return{
                ...state,
                isPending: false,
                error: payload
            }

        default:
            return state
    }
}