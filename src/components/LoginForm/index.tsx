import { FC, useRef, useState } from "react";
import LoginFormStepOne from "./components/LoginFormStepOne";
import styles from "./index.module.scss";
import Message, { MessageHandle } from "../Message";
import LoginFormStepTwo from "./components/LoginFormStepTwo";

const LoginForm: FC = () => {
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"first" | "second">("first");
  const messageRef = useRef<MessageHandle | null>(null);

  const onStepOneSuccess = (token: string) => {
    setToken(token);
    setStep("second");
  };

  const onStepTwoSuccess = () => {
    window.location.replace("https://www.lizhi.io");
  };

  const onError = (message: string) => {
    messageRef.current?.show(message);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>DIGITALYCHEE</div>
      {step === "first" ? (
        <LoginFormStepOne onSuccess={onStepOneSuccess} onError={onError} />
      ) : (
        <LoginFormStepTwo
          token={token}
          onSuccess={onStepTwoSuccess}
          onError={onError}
        />
      )}
      <div className={styles.messageWrapper}>
        <Message ref={messageRef} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>其他方式登录</div>
      </div>
    </div>
  );
};

LoginForm.displayName = "LoginForm";
export default LoginForm;
