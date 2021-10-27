import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

// Auth Reducer
export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
      };
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// User Reducer
export const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_PROFILE_RESET:
      return {
        loading: false,
        isUpdated: false,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
