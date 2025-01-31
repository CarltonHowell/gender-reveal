import React from "react";
import ReactConfetti from "react-confetti";
import { IS_BOY } from "./constants";

const Confetti = ({ isRevealed }: { isRevealed: boolean }) => {
  const colors = IS_BOY ? ["#78b3c8", "#2e606d"] : ["#f7b7a3", "#935469"];
  return (
    <ReactConfetti
      width={window.innerWidth}
      height={window.innerHeight}
      colors={colors}
      run={isRevealed}
      numberOfPieces={250}
      initialVelocityY={{ min: 4, max: 8 }}
    />
  );
};

export default Confetti;
