import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import userReducer from './user';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
});

type RootState = ReturnType<typeof store.getState>;

export const selectCount = (state:RootState) => state.counter.count;
export const selectUser = (state:RootState) => state.user.email;
export const selectLogged = (state:RootState) => state.user.isLogged;

export default store;