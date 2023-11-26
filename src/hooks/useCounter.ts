import { useEffect, useState } from "react";

interface UseCounterOutput {
  counter: number;
  gamesPlayed: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounter = (): UseCounterOutput => {
  const [counter, setCounter] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  useEffect(() => {
    const isInitial = gamesPlayed === 0 && counter === 0;

    if (!isInitial) {
      setGamesPlayed(gamesPlayed + 1);
    }
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
    setGamesPlayed(0);
  };

  return {
    counter,
    gamesPlayed,
    increment,
    decrement,
    reset,
  };
};
