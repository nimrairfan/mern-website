import { combineReducers } from "redux";
import { LoginReducer } from "./authReducer";

const rootReducer = combineReducers({
  LoginReducer,
});

export default rootReducer;