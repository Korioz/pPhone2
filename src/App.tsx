import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Phone } from "./components/main/Phone";

import SFProTextRegular from "./assets/fonts/SF-Pro-Text-Regular.otf";
import SFProTextSemibold from "./assets/fonts/SF-Pro-Text-Semibold.otf";
import SFProTextLight from "./assets/fonts/SF-Pro-Text-Light.ttf";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "HapnaSlab", serif;
    margin: 0;
    padding: 0;
    background-image: url('https://cdn.gamer-network.net/2014/usgamer/GTA-V-PS4-Screenshot-12.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  @font-face {
    font-family: 'SFProTextRegular';
    src: url(${SFProTextRegular});
  }
  @font-face {
    font-family: 'SFProTextSemibold';
    src: url(${SFProTextSemibold});
  }
  @font-face {
    font-family: 'SFProTextLight';
    src: url(${SFProTextLight});
  }
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
`;

export const App: React.FC = () => {
    return (
        <Container>
            <GlobalStyle />

            <Phone />
        </Container>
    );
};
