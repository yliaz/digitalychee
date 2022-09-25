import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { verify } from "../../../service/api";
import Input from "../../Input";
import styles from "../index.module.scss";
import ConfirmButton from "./ConfirmButton";

interface LoginFormStepTwoProps {
  token: string;
  onSuccess: () => void;
  onError: (message: string) => void;
}

const LoginFormStepTwo: FC<LoginFormStepTwoProps> = (props) => {
  const { token, onSuccess, onError } = props;
  const [verifyCode, setVerifyCode] = useState("");
  const [verifyCodeErrorMessage, setVerifyCodeErrorMessage] =
    useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const allowConfirm =
    verifyCode.length === 6 && verifyCodeErrorMessage.length === 0;

  useEffect(() => {
    if (verifyCode.length === 0) {
      setVerifyCodeErrorMessage("");
    } else if (!/^[0-9]+$/.test(verifyCode) || verifyCode.length !== 6) {
      setVerifyCodeErrorMessage("验证码为6位数字，请检查输入");
    } else {
      setVerifyCodeErrorMessage("");
    }
  }, [verifyCode]);

  const onConfirm = async () => {
    if (!allowConfirm || isLoading) return;
    setIsLoading(true);
    await verify({ token, tfa: verifyCode })
      .then(
        () => {
          onSuccess();
        },
        (error) => {
          console.log("error", error);
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
      <div className={styles.avatar}></div>
      <Input
        type="password"
        placeHolder="请输入你的两步认证验证码"
        value={verifyCode}
        onChange={setVerifyCode}
        errorMessage={verifyCodeErrorMessage}
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

LoginFormStepTwo.displayName = "LoginFormStepTwo";
export default LoginFormStepTwo;
