import React from "react";
import {NavLink, Outlet} from "react-router-dom";

function NavBar() {
  return (
    <div className="d-flex align-items-center flex-column flex-wrap">
      <div className="topnav ">
        <NavLink activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink activeclassname="active" to="/profile">
          User
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
export default NavBar;
