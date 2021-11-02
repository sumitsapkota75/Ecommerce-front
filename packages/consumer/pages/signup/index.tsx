import { Button } from "@project/shared";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import RestrictedRoute from "../../withRestrictedRoute";
import firebase from "firebase";
import { AuthContext } from "../../utils/AuthContext";
import { useMutation } from "react-query";
import { signUp } from "../../services/signup";
import { useRouter } from "next/router";
import * as yup from "yup";
import { Spinner, useToast } from "@chakra-ui/react";

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

const SignupPage: React.FC = () => {
  const toast = useToast();
  const router = useRouter();
  const { setIsOnVerification } = useContext(AuthContext);
  const [initialValues] = useState<any>({
    email: "",
    password: "",
    company: "",
    name: "",
  });
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required("Required")
      .email("Invalid email format")
      .max(80, "Maximum 80 characters allowed"),
    password: yup
      .string()
      .required("Required")
      .min(6, "Password should be at least 6 characters or more"),
    name: yup
      .string()
      .required("Required")
      .max(80, "Maximum 80 characters allowed"),
    address: yup.string().max(80, "Maximum 80 characters allowed"),
  });
  const handleSubmit = () => {
    const userData: any = {
      email: formik.values.email,
      password: formik.values.password,
      phone: formik.values.phone.toString(),
      name: formik.values.name,
      address: "surkhet",
    };
    mutation.mutate(userData);
  };
  const formik = useFormik<any>({
    initialValues: initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });
  const mutation = useMutation(signUp, {
    onError: (error?: any) => {
      const msg = error.data.error;
      toast({
        position: "top",
        title: "Error signing up",
        description: msg,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    },
    onSuccess: async () => {
      setIsOnVerification(false);
      toast({
        position: "top",
        title: "Signup successfull",
        description: "Please check your inbox for verification.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      formik.resetForm();
      router.push("/login");
      await firebase.auth().signOut();
    },
  });
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Container>
        <LoginWrapper>
          <h3 className="heading">Signup</h3>

          <TextFieldWrapper>
            <form onSubmit={formik.handleSubmit}>
              <InputFieldWrapper>
                <input
                  name="name"
                  type="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                ></input>
              </InputFieldWrapper>
              <InputFieldWrapper>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></input>
              </InputFieldWrapper>
              <InputFieldWrapper>
                <input
                  name="phone"
                  type="number"
                  placeholder="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                ></input>
              </InputFieldWrapper>
              <InputFieldWrapper>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </InputFieldWrapper>
              <StyledButton htmlType="submit" type="primary">
                {!mutation.isLoading ? "Signup" : <Spinner />}
              </StyledButton>
            </form>
          </TextFieldWrapper>
        </LoginWrapper>
      </Container>
    </>
  );
};

export default RestrictedRoute(SignupPage);
