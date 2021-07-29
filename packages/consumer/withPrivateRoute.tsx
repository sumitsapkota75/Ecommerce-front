import React, { useContext, useEffect } from "react";
import Router from "next/router";
import { Spin, Layout } from "antd";
import styled from "styled-components";
import { AuthContext } from "./utils/AuthContext";

const { Content } = Layout;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const LayoutWrapper = styled.div``;

const PrivateRoute = (AuthComponent) => {
  function PrivateComponent({ children }) {
    const { authenticated, loading, user } = useContext(AuthContext);

    useEffect(() => {
      //   const { email, name, company } = Router.query;

      if (!loading) {
        // if (!authenticated && sessionStorage["contract_detail_url"] && email) {
        //   Router.push({
        //     pathname: `/login-verify`,
        //     query: {
        //       email: email,
        //       name: name,
        //       company: company,
        //     },
        //   });
        // } else if (!authenticated) {
        //   Router.push("/login");
        // }
        if (!authenticated) {
          Router.push("/login");
        }

        if (authenticated && sessionStorage["contract_detail_url"]) {
          Router.push(sessionStorage["contract_detail_url"]);
        }
      }
    }, [authenticated, loading, user]);

    if (loading) {
      return (
        <LoaderWrapper>
          <Spin size="large" className="loader" />
        </LoaderWrapper>
      );
    }
    return <>{authenticated && <> {children} </>} </>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <PrivateComponent>
          <Layout>
            <LayoutWrapper>
              <Content>
                <AuthComponent {...this.props} />
              </Content>
            </LayoutWrapper>
          </Layout>
        </PrivateComponent>
      );
    }
  };
};

export default PrivateRoute;
