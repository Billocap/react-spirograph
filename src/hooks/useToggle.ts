import { useState } from "react";

export default function useToggle(initialValue: boolean) {
  const [state, setState] = useState(initialValue);

  return {
    state,
    on() {
      setState(true);
    },
    off() {
      setState(false);
    },
    toggle() {
      setState((prev) => !prev);
    }
  };
}
