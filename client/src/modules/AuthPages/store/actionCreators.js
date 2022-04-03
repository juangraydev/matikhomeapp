import * as types from "./actionTypes";

export function fetchUser(){
    return {
        type: types.FETCH_USER,
    }
};
export function successUser(data){
    return {
        type: types.SUCCESS_USER,
        payload: data
    }
};
export function failUser(error){
    return {
        type: types.FAIL_USER,
        payload: error
    }
};