import { GET_USERS } from "../reducers/types";
import { _getUsers } from "../utils/_DATA";
export const getUsers = () => async (dispatch) => {
  const users = await _getUsers();

  dispatch({ type: GET_USERS, payload: users });
};
