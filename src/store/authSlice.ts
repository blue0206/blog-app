import { createSlice, Slice } from "@reduxjs/toolkit";
import {AuthState, AuthAction} from "../../types/slice-types.ts";

const initialState: AuthState = {
    status: false,
    userData: null
};

const authSlice: Slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state: AuthState, action: AuthAction) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout: (state: AuthState, action: AuthAction) => {
            state.status = false;
            state.userData = action.payload;
        }
    }
});

export default authSlice.reducer;

export const {login, logout} = authSlice.actions;