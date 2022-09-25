import { FC } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";

type InputType = "text" | "password";

interface InputProps {
  type?: InputType;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  errorMessage?: string;
  placeHolder?: string;
}

const Input: FC<InputProps> = (props) => {
  const {
    type = "text",
    value = "",
    onChange,
    errorMessage,
    placeHolder = "",
  } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          className={classnames(
            styles.customInput,
            errorMessage ? styles.warning : ""
          )}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
          placeholder={placeHolder}
        ></input>
        <div className={classnames(styles.icon, styles[type])}></div>
      </div>
      {errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : null}
    </div>
  );
};

Input.displayName = "Input";
export default Input;
