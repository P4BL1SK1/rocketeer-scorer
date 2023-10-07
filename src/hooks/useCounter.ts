import { useEffect, useState } from "react";

interface UseCounterOutput {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounter = (): UseCounterOutput => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
