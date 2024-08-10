import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { authSlice } from "./features/authSlice";

export default configureStore({
  // reducers
  reducer: {
    alert: alertSlice.reducer,
    auth: authSlice.reducer,
  },
});
