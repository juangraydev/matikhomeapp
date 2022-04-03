import * as types from "./actionTypes";

export function fetchDashboard(){
    return {
        type: types.FETCH_DASHBOARD,
    }
};
export function successDashboard(data){
    return {
        type: types.SUCCESS_DASHBOARD,
        payload: data
    }
};
export function failDashboard(error){
    return {
        type: types.FAIL_DASHBOARD,
        payload: error
    }
};