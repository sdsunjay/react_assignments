import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

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

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
