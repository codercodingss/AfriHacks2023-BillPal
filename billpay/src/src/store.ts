import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {useSelector, useDispatch} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux/es/types';
import {authReducer} from './slices';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
setupListeners(store.dispatch);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, useAppSelector, useAppDispatch};
