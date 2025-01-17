import {configureStore, Store} from "@reduxjs/toolkit";
import authReducer from "./authSlice.ts";

const store: Store = configureStore({
    reducer: authReducer
});

export default store;