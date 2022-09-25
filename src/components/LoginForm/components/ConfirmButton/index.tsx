import { FC } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

interface ConfirmButtonProps {
  disabled: boolean;
  onConfirm: () => void;
  children?: React.ReactNode;
}

const ConfirmButton: FC<ConfirmButtonProps> = (props) => {
  const { disabled, onConfirm, children } = props;
  return (
    <div
      className={classNames(
        styles.confirmButton,
        disabled ? styles["disabled"] : ""
      )}
      onClick={onConfirm}
    >
      {children}
    </div>
  );
};

ConfirmButton.displayName = "ConfirmButton";
export default ConfirmButton;
