import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged, getLogout, getRegister, getDepartement } from '../slices/authSlice';
import { getTechTicketById,getTicketById,assignTech,getTechnicien,getTicket, getMyTicket, addTicket, techTicket, resolvedTicket } from '../slices/ticketSlice';
import { handelTechTicketById,handelGetTicketById,handelAssignTechnicien,handelGetTechnicien,handelGetTicket, handelGetMyTicket, handelAddTicket, handelTechTicket, handelResolvedTicket} from './handlers/ticket.handler';
import { handelGetLogin, handelIfLoged, handelGetLogout, handelGetRegister, handelDepartement } from './handlers/auth.handler';


export function* watcherSaga() {
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
  yield takeLatest(getLogout.type, handelGetLogout);
  yield takeLatest(getRegister.type, handelGetRegister);
  yield takeLatest(getDepartement.type, handelDepartement);
  yield takeLatest(getTicket.type, handelGetTicket);
  yield takeLatest(getMyTicket.type, handelGetMyTicket);
  yield takeLatest(addTicket.type, handelAddTicket);
  yield takeLatest(techTicket.type, handelTechTicket);
  yield takeLatest(resolvedTicket.type, handelResolvedTicket);
  yield takeLatest(getTechnicien.type, handelGetTechnicien);
  yield takeLatest(assignTech.type, handelAssignTechnicien);
  yield takeLatest(getTicketById.type, handelGetTicketById);
  yield takeLatest(getTechTicketById.type, handelTechTicketById);

}
