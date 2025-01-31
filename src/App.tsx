import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import ScratchCanvas from "./ScratchCanvas";
import Confetti from "./Confetti";
import { IS_BOY } from "./constants";

const IMG_BANNER_BOY = require("./image-banner-boy.png");
const IMG_BANNER_GIRL = require("./image-banner-girl.png");

const GlobalStyle = createGlobalStyle`
  html, body {
  height: 100%;
  width: 100%;
    overflow: hidden;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  width: 100vw;
  background-image: url(./background.png);
  background-size: 100% 100%;
`;

function App() {
  const [isRevealed, setIsRevealed] = React.useState(false);

  const bannerWidth = Math.min(window.innerWidth - 60, 260); // limit to 600

  return (
    <div className="App">
      <StyledDiv>
        <ScratchCanvas
          onRevealed={() => setIsRevealed(true)}
          isRevealed={isRevealed}
        />
        <Confetti isRevealed={isRevealed} />
        <img
          src={IS_BOY ? IMG_BANNER_BOY : IMG_BANNER_GIRL}
          width={bannerWidth}
          style={{
            position: "absolute",
            bottom: 40,
            zIndex: 20,
            transition:
              "opacity 0.5s cubic-bezier(0.165, 0.25, 0.75, 1), transform 500ms cubic-bezier(0, -0.55, 0.27, 1.55)",
            transform: `scale(${isRevealed ? 1 : 0.8})`,
            opacity: isRevealed ? 1 : 0,
          }}
        />
      </StyledDiv>
      <GlobalStyle />
    </div>
  );
}

export default App;
