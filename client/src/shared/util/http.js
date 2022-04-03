import axios from 'axios'
import history from './../../routers/routing'
import {url} from './constants'

const Http = axios.create();

Http.defaults.baseURL = url;
// Http.defaults.timeout = 1000;
// Http.defaults.headers= {"Access-Control-Allow-Origin": "*"};

// Add a request interceptor
Http.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('TOKEN');
    config.headers.authorization = token ? `Bearer ${ token }`: '';

    // console.log(config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
Http.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log(response);
  return response;
}, function (error) {
  // Do something with response error
  // console.log(error.response.status);

  let status = error.response.status;
  try {
    switch(status){
      case 200: break;
      case 401:
      default:
        // history.push("/login");
        break;
  
    }
  }catch (err){
    console.error(err);
    alert("Internal Server Error");
  }

  return Promise.reject(error);
});

export default Http