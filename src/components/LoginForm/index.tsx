import { FC } from "react";
import styled from "styled-components";

const LoginForm: FC = () => {
  return <LoginFormContainer>登录表单</LoginFormContainer>;
};

const LoginFormContainer = styled.div`
  flex: 1;
`;

LoginForm.displayName = "LoginForm";
export default LoginForm;
