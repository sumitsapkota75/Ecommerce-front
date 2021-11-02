import * as Sentry from "@sentry/node";
import { AppProps } from "next/app";
import { analytics } from "@project/shared";
import React, { useEffect, useState } from "react";
import "../utils/css-imports";
import { useRouter } from "next/router";
import firebase from "firebase";
import { Layout } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "../utils/AuthContext";
import styled from "styled-components";
import "antd/dist/antd.css";
import "../style.css";
// import TopBar from "../components/organisms/TopBar";
// import CategoryBar from "../components/organisms/CategoryBar";
import Header from "../components/organisms/Header/Header";
// import BottomBar from "../components/molecules/BottomBar";
import Footer from "../components/organisms/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const LayoutWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  .top-bar {
    @media (max-width: 1075px) {
      display: none;
    }
  }
  .category-bar {
    @media (max-width: 1075px) {
      display: none;
    }
  }
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
  const [loading] = useState(false);
  const [user, setUser] = useState(null as firebase.User | null);
  const [collapse, setCollapse] = useState(false);
  const [isOnVerification, setIsOnVerification] = useState(false);
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

  useEffect(() => {
    setCollapse(collapse);
  }, [collapse]);
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider
          loading={loading}
          user={user}
          setUser={setUser}
          isOnVerification={isOnVerification}
          setIsOnVerification={setIsOnVerification}
        >
          <ChakraProvider>
            <Layout>
              <LayoutWrapper>
                {/* <div className="top-bar">
                <TopBar />
              </div> */}
                <Header />
                {/* <div className="category-bar">
                <CategoryBar />
              </div> */}
                <Component {...pageProps} />
                <Footer />
                {/* <BottomBar /> */}
              </LayoutWrapper>
            </Layout>
          </ChakraProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
