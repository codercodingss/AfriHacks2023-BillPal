import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {signIn} from '../thunks';

interface IState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: IState = {
  isLoading: false,
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, {payload}: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
  },
  extraReducers(build) {
    build.addCase(signIn.pending, state => {
      state.isLoading = true;
    });
    build.addCase(
      signIn.fulfilled,
      (state /* , {payload}: PayloadAction<IAuth> */) => {
        state.isLoading = false;
        state.isAuthenticated = true;
      },
    );
    build.addCase(signIn.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = {
        message: error?.message || 'Failed to sign in',
      };
    });
  },
});

const authReducer = authSlice.reducer;
const authActionCreators = authSlice.actions;

export {authReducer, authActionCreators};
