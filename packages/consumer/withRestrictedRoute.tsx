import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
import { message, Spin } from "antd";
import styled from "styled-components";
import { AuthContext } from "./utils/AuthContext";
import firebase from "firebase";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const RestrictedRoute = (AuthComponent) => {
  function RestrictedComponent({ children }) {
    const { authenticated, loading } = useContext(AuthContext);
    const [user, setUser] = useState(null as firebase.User | null);
    const initialLoad = () => {
      firebase.auth().onAuthStateChanged(async (user) => {
        try {
          if (user) {
            setUser({ ...user });
          }
        } catch (error) {
          error?.status == 401
            ? message.error("Unauthorized User")
            : message.error("An error has occurred. Please try again later.");
          dispatchUser();
        }
      });
    };
    useEffect(() => {
      initialLoad();
    }, []);

    const dispatchUser = () => {
      firebase.auth().signOut();
      setUser(null);
    };
    useEffect(() => {
      if (authenticated) {
        Router.push("/homepage");
      }
    }, [authenticated, loading]);

    if (loading) {
      return (
        <LoaderWrapper>
          <Spin size="large" className="loader" />
        </LoaderWrapper>
      );
    }
    return <>{!authenticated && children}</>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <RestrictedComponent>
          <AuthComponent {...this.props} />
        </RestrictedComponent>
      );
    }
  };
};

export default RestrictedRoute;
