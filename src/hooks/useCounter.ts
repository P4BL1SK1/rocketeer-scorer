import { useState } from "react";

interface UseCounterOutput {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = (): UseCounterOutput => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return {
    counter,
    increment,
    decrement,
  };
};
