import React from "react";
import Login from "../../components/Login";
import styles from "./index.module.css";
import Main from "../../components/Main";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
const LoginRoute = () => {
  const { state } = useLocation();
  const isAuth = useSelector((state) => state.login.isAuth);
  const auth = () => {
    return <Main />;
  };
  const unAuth = () => {
    return (
      <div className={styles.page}>
        <div className="card">
          <div className="card-header">
            <h3>LOGIN</h3>
          </div>
          <Login />
        </div>
      </div>
    );
  };

  return (
    <>
      {" "}
      {isAuth ? (
        state?.from ? (
          <Redirect to={state.from} />
        ) : (
          auth()
        )
      ) : (
        unAuth()
      )}{" "}
    </>
  );
};

export default LoginRoute;
