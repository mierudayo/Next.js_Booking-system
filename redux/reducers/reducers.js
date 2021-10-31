import { combineReducers } from "redux";
import { bookedDatesReducer, checkBookingReducer } from "./bookingReducers";
import { allRoomsReducer, roomDetailsReducer } from "./roomReducers";
import {
  authReducer,
  loadedUserReducer,
  userReducer,
  forgotPasswordReducer,
} from "./userReducers";

export const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  loadedUser: loadedUserReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
});
