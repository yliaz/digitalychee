import { FC } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import Banner2X from "../assets/images/iPhone_banner@2x.png";
import Banner3X from "../assets/images/iPhone_banner@3x.png";

const Login: FC = () => {
  return (
    <LoginContainer>
      <div>登录</div>
      <LoginForm />
      <Banner />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Banner = styled.div`
  background-image: url(${Banner2X});
  @media screen and (-webkit-min-device-pixel-ratio: 3),
    screen and (min--moz-device-pixel-ratio: 3) {
    background-image: url(${Banner3X});
  }
`;

Login.displayName = "Login";
export default Login;
