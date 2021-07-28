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

const LayoutWrapper = styled.div`
  width: calc(100% - 260px);

  & .ant-layout-header {
    height: 54px;
    padding: 0 50px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 64px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }

  & .ant-layout-content {
    min-height: 92vh;
    padding-bottom: 0;
  }

  & .ant-layout-footer {
    padding-top: 0;
  }
`;

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
