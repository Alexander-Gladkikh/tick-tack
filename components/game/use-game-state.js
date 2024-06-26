import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constant";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const initialStateCells = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  const [cells, setCells] = useState(initialStateCells);
  const [currentStep, setCurrentStep] = useState(SYMBOL_O);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;
  const getWinnerCell = (index) => winnerSequence?.includes(index);

  const toggleCell = (index) => {
    if (cells[index] || winnerSequence) {
      return;
    }
    const cellsCopy = cells.slice();
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
    setWinnerSequence(winner);
  };

  const resetGame = () => {
    setCells(initialStateCells);
    setWinnerSequence(undefined);
    setCurrentStep(SYMBOL_X);
  };

  return {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    toggleCell,
    resetGame,
    getWinnerCell,
  };
}