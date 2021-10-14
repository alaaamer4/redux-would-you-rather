import React, { useState } from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { useSelector } from "react-redux";
const Login = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const handelChange = (e) => {
    setSelectedUser(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(login(selectedUser));
  };
  return (
    <>
      <form onSubmit={handelSubmit} className={styles.form}>
        <h2>Please Select A User To Start Playing</h2>
        <select
          name="login"
          id="login"
          className={styles.select}
          onChange={handelChange}
          value={selectedUser}
        >
          <option value="" disabled hidden>
            please select a user
          </option>
          {users &&
            Object.entries(users).map(
              ([key, user]) =>
                user && (
                  <option value={user.id} name={user.name} key={key}>
                    {user.name}
                  </option>
                )
            )}
        </select>
        <button className={styles.btn}>submit</button>
      </form>
    </>
  );
};

export default Login;
