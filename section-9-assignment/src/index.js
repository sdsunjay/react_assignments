import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// applied to ALL requests globally
axios.interceptors.request.use(request => {
  console.log(request);
  // Edit the request config
  // such as add headers
  return request;
}, error => {
  // if you have no internet connectivity
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit the request config
  // such as add headers
  return response;
}, error => {
  // if you have no internet connectivity
  console.log(error);
  return Promise.reject(error);
});

// You can remove interceptors using the example code below
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
