import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import {auth} from "../libs/firebase";
import {getAuth, signOut} from "firebase/auth";

function NavBar() {
  const out = () => {
    getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex align-items-center flex-column flex-wrap">
      <div className="topnav ">
        <div>
          <NavLink activeclassname="active" to="/">
            Home
          </NavLink>
          <NavLink activeclassname="active" to="/profile">
            Profile
          </NavLink>
        </div>
        <a
          onClick={out}
          style={{color: "white", marginRight: "2%"}}
          className="d-flex align-items-center flex-wrap"
          href="/Log"
        >
          SignOut
        </a>
      </div>
      <Outlet />
    </div>
  );
}
export default NavBar;
