import { LOGIN, LOGOUT } from "./types";
const initialState = {
  authUser: null,
  isAuth: false,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      return {
        authUser: null,
        isAuth: false,
      };
    default:
      return state;
  }
};
