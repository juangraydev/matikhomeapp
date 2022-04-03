import * as React from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios"
import {
  fetchUser,
  failUser,
  successUser
} from '../store/actionCreators';
import HTTP from '../../../shared/util/http'


export function siginService(data){
  console.log(data);
  return function (dispatch){
    dispatch(fetchUser())
    return new Promise((resolve, reject) => {
        HTTP.post('/api/auth/signin', data)
            .then(function (res) {
                // handle success
                localStorage.setItem('TOKEN', res.data.token);
                dispatch(successUser(res))
                console.log(res);                    
                resolve();
            })
            .catch(function (error) {
                // handle error
                dispatch(failUser(error))
                reject(error);
            })
            .then(function () {
                // always executed
            });
    });
  }
}

export function signupService(data){
  console.log(data);
  return function (dispatch){
    dispatch(fetchUser())
    return new Promise((resolve, reject) => {
        HTTP.post('/api/auth/signup', data)
            .then(function (res) {
                // handle success
                // localStorage.setItem('TOKEN', res.data.token);
                // dispatch(successUser(res))
                console.log(res);                    
                resolve();
            })
            .catch(function (error) {
                // handle error
                dispatch(failUser(error))
                reject(error);
            })
            .then(function () {
                // always executed
            });
    });
  }
}