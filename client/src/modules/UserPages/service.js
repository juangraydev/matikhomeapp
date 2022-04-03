import {
    fetchDashboard,
    failDashboard,
    successDashboard
} from './store/actionCreators';
import HTTP from '../../shared/util/http'

export function getHouseList(){
    return function (dispatch){
        dispatch(fetchDashboard())
        return HTTP.get('/api/home/list')
            .then(function (res) {
                // handle success
                console.log(res.data);
                dispatch(successDashboard(res.data));
            })
            .catch(function (error) {
                // handle error
                dispatch(failDashboard(error))
            })
            .then(function () {
                // always executed
            });
    }
}



export function postAddHouse(data){

    return function (dispatch){

        return HTTP.post('/api/house/', data)
            .then(function (res) {
                // handle success
                console.log(res.data);
                dispatch(successDashboard(res.data));
            })
            .catch(function (error) {
                // handle error
                dispatch(failDashboard(error))
            })
            .then(function () {
                // always executed
            });
    }
}