import axios from 'axios';

axios.defaults.withCredentials = true;

const URL = 'http://localhost:5400/api';

export function requestTicket() {
  return axios.request({
    method: 'get',
    url: `${URL}/ticket`,
  });
}




