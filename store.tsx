import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userListSlice from './userListSlice';
import {useDispatch, useSelector} from 'react-redux';

const rootReducer = combineReducers({
  userList: userListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
const store = configureStore({
  reducer: rootReducer,
});



export default store;