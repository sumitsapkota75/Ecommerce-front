import React, { useContext } from "react";
import firebase from "firebase";
import PrivateRoute from "../../withPrivateRoute";
import Router from "next/router";
import { AuthContext } from "../../utils/AuthContext";

function HomePage() {
  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    setUser(null);
    Router.push("/login");
  };
  return (
    <>
      <h2>This is Homepage</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default PrivateRoute(HomePage);
