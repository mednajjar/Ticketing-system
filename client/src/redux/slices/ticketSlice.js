import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticketslice',
  initialState: {
    ticket: [],
  
  },
  reducers: {
    getTicket: () => {},
    setTicket: (state = this.initialState, action) => ({
      ...state,
      ticket: action.payload,
    }),
  },
});

export const { setTicket, getTicket} = ticketSlice.actions;
export default ticketSlice.reducer;
