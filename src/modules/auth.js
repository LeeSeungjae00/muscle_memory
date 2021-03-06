import {login_service} from '../service/auth_service';
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions
} from '../lib/asyncUtils';


const AUTH_LOGIN = "AUTH_LOGIN"
const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS"
const AUTH_LOGIN_ERROR = "AUTH_LOGIN_ERROR"

const AUTH_LOGOUT = "AUTH_LOGOUT"

export const getUserData = createPromiseThunk(AUTH_LOGIN, login_service);

const initialState = {
    userData: reducerUtils.initial(),

};

export default function auth(state = initialState, action) {
    switch (action.type) {
      case AUTH_LOGIN:
      case AUTH_LOGIN_SUCCESS:
      case AUTH_LOGIN_ERROR:
        return handleAsyncActions(AUTH_LOGIN, 'userData', true)(state, action);
      case AUTH_LOGOUT:
        return {
          ...state,
          userData: reducerUtils.initial()
        };
      default:
        return state;
    }
  }