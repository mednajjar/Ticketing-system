import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    type: null,
    isAuthenticated: false,
    departement: [],
    loginError: '',
    registerError: '',
  },
  reducers: {
    ifLoged: () => {},
    getLogin: () => {},
    getRegister: () => {},
    setLogin: (state = this.initialState, action) => ({
      ...state,
      type: action.payload.type,
      isAuthenticated: action.payload.isAuthenticated,
      loginError: '',
      registerError: '',

    }),
    getLogout: () => { },
    loginError: (state = this.initialState, action) => ({
      ...state,
      loginError: action.payload,
    }),
    registerError: (state = this.initialState, action) => ({
      ...state,
      registerError: action.payload,
    }),
    getDepartement: () =>{},
    setDepartement: (state = this.initialState, action) => ({
      ...state,
      departement: action.payload,
    }),

  },
});

export const { setLogin, getRegister, getLogin, ifLoged, loginError, getLogout, registerError, getDepartement, setDepartement } = authSlice.actions;
export default authSlice.reducer;
