/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import {requestTicket } from '../requests/ticket.request';
import { setTicket} from '../../slices/ticketSlice';

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
