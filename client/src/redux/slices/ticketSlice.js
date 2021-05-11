import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticketslice',
  initialState: {
    ticket: [],
    myTicket: [],
    technicien: [],
    assignTicket: {}
  
  },
  reducers: {
    getTicket: () => {},
    setTicket: (state = this.initialState, action) => {
        return{
            ...state,
            ticket: [...action.payload],
        }
    },
    getMyTicket: () =>{},
    addTicket: () =>{},
    setMyTicket: (state = this.initialState, action) => {
        return{
            ...state,
            myTicket: [...action.payload],
        }
    },
    techTicket: ()=>{},
    resolvedTicket: ()=>{},
    getTechnicien: ()=>{},
    setTechnicien: (state = this.initialState, action) => {
      return{
          ...state,
          technicien: [...action.payload],
      }
  },
  assignTech: ()=>{},
  getTicketById:()=>{},
  setAssignTicket: (state = this.initialState, action) => {
    return{
        ...state,
        assignTicket: action.payload,
    }
  },
  getTechTicketById: ()=>{},  

  },
});

export const { getTechTicketById,setAssignTicket,getTicketById,assignTech,getTechnicien,setTechnicien,setTicket, techTicket, setMyTicket, getTicket, getMyTicket, addTicket, resolvedTicket} = ticketSlice.actions;
export default ticketSlice.reducer;
