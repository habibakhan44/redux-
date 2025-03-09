import { configureStore } from "@reduxjs/toolkit";  // Fixed the typo here
import authSlice from "./slices/auth.slice";

export const store = configureStore({
    reducer: {  // 'render' should be 'reducer'
       auth: authSlice,
    },
});
