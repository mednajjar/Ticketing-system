import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged, getLogout, getRegister, getDepartement } from '../slices/authSlice';
import { getTicket } from '../slices/ticketSlice';
import { handelGetTicket} from './handlers/ticket.handler';
import { handelGetLogin, handelIfLoged, handelGetLogout, handelGetRegister, handelDepartement } from './handlers/auth.handler';


export function* watcherSaga() {
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
  yield takeLatest(getLogout.type, handelGetLogout);
  yield takeLatest(getRegister.type, handelGetRegister);
  yield takeLatest(getDepartement.type, handelDepartement);
  yield takeLatest(getTicket.type, handelGetTicket);

}
