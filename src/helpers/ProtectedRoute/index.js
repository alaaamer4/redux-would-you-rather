import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.login.isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? <Component {...props} /> : <Redirect to="/unauth" />;
      }}
    />
  );
};

export default ProtectedRoute;
