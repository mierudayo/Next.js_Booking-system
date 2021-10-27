import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailsReducer } from "./roomReducers";
import { authReducer, userReducer } from "./userReducers";

export const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
});
