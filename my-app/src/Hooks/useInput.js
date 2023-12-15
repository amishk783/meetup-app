import { useReducer } from "react";

const initalState = {
  value: "",
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInput = (validateValue) => {
  const [inputState, disptach] = useReducer(inputStateReducer, initalState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;
  const valueChangeHandler = (event) => {
    disptach({ type: "INPUT", value: event.target.value });
  };
  const isTouchHandler = (event) => {
    disptach({ type: "BLUR" });
  };
  const reset = () => {
    disptach({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    isTouchHandler,
    reset,
  };
};
export default useInput;
