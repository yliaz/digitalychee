import { FC } from "react";
import styled from "styled-components";
import LoginForm from "../LoginForm";
import styles from "./index.module.scss";

const Login: FC = () => {
  return (
    <LoginContainer>
      <div>登录</div>
      <LoginForm />
      <div className={styles.banner}></div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

Login.displayName = "Login";
export default Login;
