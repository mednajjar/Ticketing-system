/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import {requestGetTicketById,requestAssignTechnicien,requestGetTechnicien,requestTicket, requestMyTicket, requestAddTicket, requestTechTicket, requestResolvedTicket } from '../requests/ticket.request';
import { setAssignTicket,setTechnicien,setTicket, setMyTicket} from '../../slices/ticketSlice';

export function* handelGetTicket(action) {
  try {
    const { data } = yield call(requestTicket, action);
    if (data) {
      yield put(setTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelGetMyTicket(action) {
  try {
    const { data } = yield call(requestMyTicket, action);
    if (data) {
      yield put(setMyTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelAddTicket(action) {
  try {
    const { data } = yield call(requestAddTicket, action);
    if (data) {
      yield put(setMyTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelTechTicket(action) {
  try {
    const { data } = yield call(requestTechTicket, action);
    if (data) {
      yield put(setMyTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelResolvedTicket(action) {
  try {
    const { data } = yield call(requestResolvedTicket, action);
    if (data) {
      yield put(setMyTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelGetTechnicien(action) {
  try {
    const { data } = yield call(requestGetTechnicien, action);
    if (data) {
      yield put(setTechnicien(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelAssignTechnicien(action) {
  try {
    const { data } = yield call(requestAssignTechnicien, action);
    if (data) {
      console.log('data', data)
      yield put(setTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}

export function* handelGetTicketById(action) {
  try {
    const { data } = yield call(requestGetTicketById, action);
    if (data) {
      yield put(setAssignTicket(data));
    }
  } catch (error) {
    if (error.response) {
        console.log(error.response);
      }  }
}
