import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";
import { logout } from "../../actions/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.login.isAuth);
  const user = useSelector((state) => state.login.authUser);
  const authLinks = [
    { name: "Home", path: "/" },
    { name: "New Question", path: "/add" },
    { name: "Leader Board", path: "/leaderboard" },
  ];
  const unAuthLinks = [{ name: "Home", path: "/" }];
  const onClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <nav className={styles.nav}>
        {isAuth
          ? authLinks.map((l, i) => (
              <NavLink to={l.path} key={i} activeStyle={{ color: "#fff" }}>
                {l.name}
              </NavLink>
            ))
          : unAuthLinks.map((l, i) => (
              <NavLink to={l.path} key={i} activeStyle={{ color: "#fff" }}>
                {l.name}
              </NavLink>
            ))}
        {isAuth && user && (
          <>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.avatar}>
              <img src={user.avatarURL} alt="avatar" />
            </div>
            <Link to="/" onClick={onClick}>
              {" "}
              Logout{" "}
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
