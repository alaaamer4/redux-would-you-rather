import { LOGIN, LOGOUT } from "../reducers/types";
import { _getUsers } from "../utils/_DATA";

export const login = (id) => async (dispatch) => {
  const users = await _getUsers();

  const user = Object.entries(users).find(([_, value]) => value.id === id);

  dispatch({ type: LOGIN, payload: user[1] });
};
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
