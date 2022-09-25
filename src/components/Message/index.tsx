import classNames from "classnames";
import { forwardRef, useImperativeHandle, useReducer } from "react";
import styles from "./index.module.scss";

export type MessageHandle = {
  show: (message: string) => void;
};

interface MessageProps {}

const initialState = {
  message: "",
  visible: false,
};

type ACTIONTYPE =
  | { type: "show"; payload: { message: string } }
  | { type: "hide" };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "show":
      return {
        message: action.payload.message,
        visible: true,
      };
    case "hide":
      return {
        message: "",
        visible: false,
      };
  }
};

const Message = forwardRef<MessageHandle, MessageProps>((props, ref) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { message, visible } = state;
  const showMessage = (message: string) => {
    dispatch({ type: "show", payload: { message } });
    setTimeout(() => {
      hideMessage();
    }, 2500);
  };

  const hideMessage = () => {
    dispatch({ type: "hide" });
  };

  useImperativeHandle(ref, () => ({
    show: showMessage,
  }));

  return (
    <div
      className={classNames(
        styles.container,
        styles[visible ? "show" : "hide"]
      )}
    >
      {message}
    </div>
  );
});

Message.displayName = "Message";
export default Message;
