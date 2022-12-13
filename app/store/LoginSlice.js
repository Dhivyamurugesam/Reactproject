import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../services/AuthService';

const initialState = {
  user: '',
  token: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addMatcher(
    //   authApi.endpoints.login.matchFulfilled,
    //   (state, {payload}) => {
    //     console.log('----> Login', payload);
    //     state.token = payload.token;
  

    // builder.addMatcher(
    //   authApi.endpoints.authCode.matchFulfilled,
    //   (state, {payload}) => {
    //     state.token = payload.response.token;
    //     state.user = payload.response.user;
    //   },
    // );
    // builder.addMatcher(
    //   studentNameApi.endpoints.logout.matchFulfilled,
    //   (state, {payload}) => {
    //     return {
    //       ...initialState,
    //     };
    //   },
    // );
  },
});

export default loginSlice.reducer;