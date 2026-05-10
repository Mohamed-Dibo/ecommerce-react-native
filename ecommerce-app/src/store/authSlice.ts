import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
  email: any;
  password: any;
  token: string | null;
  isLoggedIn: boolean;
  isHydrated: boolean;
  loading: boolean;
};

const initialState: AuthState = {
  email: null,
  password: null,
  token: null,
  isLoggedIn: false,
  isHydrated: false,
  loading: false,
};

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (payload) => {
    await AsyncStorage.setItem("auth", JSON.stringify(payload));
    return payload;
  },
);

export const logoutAsync = createAsyncThunk("auth/Logout", async () => {
  await AsyncStorage.removeItem("auth");
  return true;
});

export const loadAuth = createAsyncThunk("auth/loadAuth", async () => {
  const data = await AsyncStorage.getItem("auth");
  if (data) {
    return JSON.parse(data);
  }
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })

      .addCase(loadAuth.fulfilled, (state, action: PayloadAction<any>) => {
        if (action.payload) {
          state.email = action.payload.email;
          state.password = action.payload.password;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
        state.isHydrated = true;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.email = null;
        state.password = null;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

// export const {  } = authSlice.actions;
export default authSlice.reducer;
