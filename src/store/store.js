import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import uiReducer from "../features/ui/uiSlice";

const reducers = { ui: uiReducer };

const rootReducer = combineReducers(reducers);

export default configureStore({ reducer: { ui: uiReducer } });
