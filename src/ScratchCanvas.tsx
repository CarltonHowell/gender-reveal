import React from "react";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";
import { IS_BOY } from "./constants";

const IMG = require("./image-top-transparent.png");
const IMG_BOY = require("./image-bottom-boy.png");
const IMG_GIRL = require("./image-bottom-girl.png");

const DEBUG = false;

type ScratchProps = {
  onRevealed?: () => void;
  isRevealed?: boolean;
};

const ScratchCanvas = ({ onRevealed, isRevealed }: ScratchProps) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenRatio = screenWidth / screenHeight;

  const imageWidth = 880;
  const imageHeight = 1728;
  const imageRatio = imageWidth / imageHeight;

  const maxImageWidth =
    screenRatio > imageRatio ? screenHeight * imageRatio : screenWidth;
  const maxImageHeight =
    screenRatio > imageRatio ? screenHeight : screenWidth / imageRatio;

  const imageWidthRatio = maxImageWidth / imageWidth;
  const imageHeightRatio = maxImageHeight / imageHeight;

  const boyBoxPosition = {
    width: 460 * imageWidthRatio,
    height: 480 * imageHeightRatio,
    left: 380 * imageWidthRatio,
    top: 260 * imageHeightRatio,
  };

  const girlBoxPosition = {
    width: 440 * imageWidthRatio,
    height: 460 * imageHeightRatio,
    left: 10 * imageWidthRatio,
    top: 630 * imageHeightRatio,
  };

  const customCheckZone = {
    x: IS_BOY ? boyBoxPosition.left : girlBoxPosition.left,
    y: IS_BOY ? boyBoxPosition.top : girlBoxPosition.top,
    width: IS_BOY ? boyBoxPosition.width : girlBoxPosition.width,
    height: IS_BOY ? boyBoxPosition.height : girlBoxPosition.height,
  };

  return (
    <div>
      <ScratchCard
        width={maxImageWidth}
        height={maxImageHeight}
        image={IMG}
        customCheckZone={customCheckZone}
        finishPercent={70}
        brushSize={15}
        onComplete={() => onRevealed?.()}
        customBrush={CUSTOM_BRUSH_PRESET}
      >
        {DEBUG && (
          <>
            <div
              style={{
                background: "blue",
                position: "absolute",
                ...boyBoxPosition,
              }}
            ></div>
            <div
              style={{
                background: "pink",
                position: "absolute",
                ...girlBoxPosition,
              }}
            ></div>
          </>
        )}

        <img
          src={IS_BOY ? IMG_BOY : IMG_GIRL}
          width={maxImageWidth}
          height={maxImageHeight}
          alt="reveal image"
        />
      </ScratchCard>
    </div>
  );
};

export default ScratchCanvas;
