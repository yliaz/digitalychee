import { FC } from "react";
import LoginForm from "../LoginForm";
import styles from "./index.module.scss";

const Login: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>登录</div>
      <div className={styles.form}>
        <LoginForm />
      </div>
      <div className={styles.banner}></div>
    </div>
  );
};

Login.displayName = "Login";
export default Login;
