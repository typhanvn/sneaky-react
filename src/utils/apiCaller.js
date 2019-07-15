import axios from 'axios';
// import * as Config from './../constants/Config';

export default function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `/${endpoint}`,
    data: body,
  }).catch(function(error) {
    console.log(error);
  });
}
