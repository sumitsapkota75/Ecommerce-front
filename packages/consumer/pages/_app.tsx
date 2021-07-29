import * as Sentry from "@sentry/node";
import { AppProps } from "next/app";
import { analytics } from "@project/shared";
import React, { useEffect, useState } from "react";
import "../utils/css-imports";
import { useRouter } from "next/router";
import firebase from "firebase";
import { Layout, message } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../utils/AuthContext";
import styled from "styled-components";
import "../style.css";

const LayoutWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `consumer-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const routers = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null as firebase.User | null);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logEvent = (url: string) => {
        analytics().setCurrentScreen(url);
      };

      routers.events.on("routeChangeComplete", (url) => {
        window.scrollTo(0, 0);
        logEvent(url);
      });

      logEvent(window.location.pathname);
      return () => {
        routers.events.off("routeChangeComplete", logEvent);
      };
    }
  }, []);
  const initialLoad = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user !== null) {
          // const idToken = await user!.getIdTokenResult();
          setUser(user);
        }
        setLoading(false);
      } catch (error) {
        message.error("Error occurred");
      }
    });
  };
  useEffect(() => {
    initialLoad();
  }, []);

  useEffect(() => {
    setCollapse(collapse);
  }, [collapse]);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider loading={loading} user={user} setUser={setUser}>
          {user ? (
            <Layout>
              <LayoutWrapper>
                <Component {...pageProps} />
              </LayoutWrapper>
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
