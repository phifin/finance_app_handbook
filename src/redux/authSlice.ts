import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn(
      state,
      action: PayloadAction<{
        accessToken: string | null;
        refreshToken: string | null;
      }>,
    ) {
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setLoggedOut(state) {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const {setLoggedIn, setLoggedOut} = authSlice.actions;
export default authSlice.reducer;
