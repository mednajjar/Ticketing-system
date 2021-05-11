import axios from 'axios';

axios.defaults.withCredentials = true;

const URL = 'http://localhost:5400/api';

export function requestTicket() {
  return axios.request({
    method: 'get',
    url: `${URL}/ticket`,
  });
}

export function requestMyTicket() {
  return axios.request({
    method: 'get',
    url: `${URL}/myticket`,
  });
}

export function requestAddTicket(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/addTicket`,
    data:{
        ...action.payload,
    }
  });
}

export function requestTechTicket() {
  return axios.request({
    method: 'get',
    url: `${URL}/techticket`,
  });
}

export function requestResolvedTicket(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/resolved/${action.payload}`,
  });
}

export function requestGetTechnicien(action) {
  return axios.request({
    method: 'get',
    url: `${URL}/tech`,
  });
}

export function requestAssignTechnicien(action) {
  const {id, formData}= action.payload;
  console.log('my id', id);
  console.log('my data', formData)
  return axios.post(`${URL}/assign/${id}`, formData)
}

export function requestGetTicketById(action) {
  return axios.request({
    method: 'get',
    url: `${URL}/ticket/${action.payload}`,
  });
}

export function requestGetTechTicketById(action) {
  return axios.request({
    method: 'get',
    url: `${URL}/techticket/${action.payload}`,
  });
}




