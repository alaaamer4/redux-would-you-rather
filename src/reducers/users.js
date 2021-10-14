import { GET_USERS } from "./types";

const initialState = {
  users: null,
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      let users = Object.entries(action.payload).map((q) => q[1]);
      return {
        users: users,
      };

    default:
      return state;
  }
};
