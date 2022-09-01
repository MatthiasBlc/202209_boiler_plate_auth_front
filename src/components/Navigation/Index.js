import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { loggedAtom } from "../../services/Atoms/user";

function Navigation(props) {
  const [logged, setLogged] = useAtom(loggedAtom);

  let activeStyle = {
    textDecoration: "underline",
  };

  const logout = () => {
    Cookies.remove("token");
    setLogged(false);
  };

  return (
    <div>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/profile"
      >
        Profile
      </NavLink>

      {logged ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/signup"
          >
            Signup
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/login"
          >
            Login
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Navigation;
