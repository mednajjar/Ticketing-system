import axios from 'axios';

axios.defaults.withCredentials = true;

const URL = 'http://localhost:5400/api';

export function requestIfLoged() {
  return axios.request({
    method: 'get',
    url: `${URL}`,
  });
}
export function requestLogin(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/login`,
    data: {
      ...action.payload,
    },
  });
}

export function requestDepartement(action) {
  return axios.request({
    method: 'get',
    url: `${URL}/departements`,
  });
}

export function requestRegister(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/register`,
    data: {
      ...action.payload,
    },
  });
}
export function requestLogout() {
  return axios.request({
    method: 'post',
    url: `${URL}/logout`,
  });
}



