import { Button, firebase } from "@project/shared";
import { useFormik } from "formik";
import React, { useCallback } from "react";
import { message } from "antd";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import styled from "styled-components";
import RestrictedRoute from "../../withRestrictedRoute";

interface LoginType {
  email: string;
  password: string;
}

const Container = styled.div`
  background: #f2f2f2;
  height: 100vh;
  display: flex;
`;
const LoginWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;

  width: 400px;
  padding: 19px 32px;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  flex-direction: column;
  & .heading {
    font-family: Noto Sans JP, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 35px;
    display: flex;
    align-items: center;
  }
  & .login-text-field {
    & input {
      background: #ffffff !important;
    }
    & label {
      font-size: 14px;
      line-height: 22px;
      padding-bottom: 8px;
    }
  }
  & .forget-link {
    text-align: center;
    margin-bottom: 28px;
    & a {
      text-decoration: underline;
      color: rgba(17, 15, 36, 0.4);
    }
  }
`;
const TextFieldWrapper = styled.div`
  margin-top: 35px;
`;
const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 47px;
  margin-bottom: 35px;
  font-family: Noto Sans JP, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  border-radius: 2px;
`;
const InputFieldWrapper = styled.div`
  margin-bottom: 25px;
  input {
    width: 100%;
    height: 40px;
  }
`;

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = React.useState(false);

  const handleLoginFormSubmit = () => {
    handleLogin();
  };
  const formik = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLoginFormSubmit,
  });
  const handleLogin = useCallback(async () => {
    setLoading(true);
    try {
      const data = await firebase
        .auth()
        .signInWithEmailAndPassword(
          formik.values.email,
          formik.values.password
        );
      if (!data || !data.user || !firebase.auth().currentUser) {
        return;
      }
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/user-not-found") {
        message.error(t("Email or password doesnot match"));
      } else if (errorCode === "auth/wrong-password") {
        message.error(t("Email or password doesnot match"));
      } else if (errorCode === "auth/invalid-email") {
        message.error(t("Email or password doesnot match"));
      } else {
        message.error(t("An error has occurred. Please try again later."));
      }
    }
    setLoading(false);
  }, [formik.values]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <LoginWrapper>
          <h3 className="heading">Login</h3>
          <TextFieldWrapper>
            <form onSubmit={formik.handleSubmit}>
              <InputFieldWrapper>
                <input
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></input>
              </InputFieldWrapper>
              <InputFieldWrapper>
                <input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </InputFieldWrapper>
              <StyledButton htmlType="submit" type="primary">
                {!loading ? "Login" : "Loading"}
              </StyledButton>
            </form>
          </TextFieldWrapper>
        </LoginWrapper>
      </Container>
    </>
  );
};

export default RestrictedRoute(LoginPage);
