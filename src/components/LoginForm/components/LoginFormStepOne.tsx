import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../Input";
import { login } from "../../../service/api";
import ConfirmButton from "./ConfirmButton";

interface LoginFormStepOneProps {
  onSuccess: (token: string) => void;
  onError: (message: string) => void;
}

const LoginFormStepOne: FC<LoginFormStepOneProps> = (props) => {
  const { onSuccess, onError } = props;
  const [username, setUsername] = useState<string>("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const allowConfirm =
    username.length > 0 &&
    password.length > 0 &&
    usernameErrorMessage.length === 0 &&
    passwordErrorMessage.length === 0;

  useEffect(() => {
    if (username.length === 0) {
      setUsernameErrorMessage("");
    } else if (username.length < 4 || username.length > 16) {
      setUsernameErrorMessage("用户名长度为4~16，请检查输入");
    } else if (!/^[0-9a-zA-Z]+$/.test(username)) {
      setUsernameErrorMessage("用户名只能包含数字和字母，请检查输入");
    } else {
      setUsernameErrorMessage("");
    }
  }, [username]);

  useEffect(() => {
    if (password.length === 0) {
      setPasswordErrorMessage("");
    } else if (password.length < 8 || password.length > 32) {
      setPasswordErrorMessage("密码长度为8~32，请检查输入");
    } else if (
      !/^[0-9a-zA-Z\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]+$/.test(password)
    ) {
      setPasswordErrorMessage("密码只能包含数字、字母和标点符号，请检查输入");
    } else {
      setPasswordErrorMessage("");
    }
  }, [password]);

  const onConfirm = async () => {
    if (!allowConfirm || isLoading) return;
    setIsLoading(true);
    await login({ username, password })
      .then(
        (response) => {
          const { token } = response as any;
          onSuccess(token);
        },
        (error) => {
          const { message } = error;
          onError(message);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Input
        value={username}
        placeHolder="请输入用户名"
        onChange={setUsername}
        errorMessage={usernameErrorMessage}
      />
      <Input
        type="password"
        placeHolder="请输入密码"
        value={password}
        onChange={setPassword}
        errorMessage={passwordErrorMessage}
      />
      <ConfirmButton disabled={!allowConfirm} onConfirm={onConfirm}>
        下一步
      </ConfirmButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

LoginFormStepOne.displayName = "LoginFormStepOne";
export default LoginFormStepOne;
