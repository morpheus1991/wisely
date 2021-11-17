// src/assets/styles/global-styles.ts
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    margin:0 auto;
    padding:0 auto;
  }
  li{list-style:none;}
`;

export default GlobalStyle;
