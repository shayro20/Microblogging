import React from "react";
import {Navigate} from "react-router-dom";
import {auth} from "../libs/firebase";

function PrivateRoute({children}) {
  if (auth.currentUser) {
    return <div>{children}</div>;
  } else {
    return <Navigate to={"/Log"} />;
  }
}
export default PrivateRoute;
