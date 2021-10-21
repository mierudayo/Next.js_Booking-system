import { combineReducers } from "redux";
import { allRoomsReducer } from "./roomReducers";

export const reducers = combineReducers({
  allRooms: allRoomsReducer,
});
