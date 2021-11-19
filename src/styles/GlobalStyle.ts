// src/assets/styles/global-styles.ts
import { createGlobalStyle, css } from "styled-components";
// import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.

export const fontSize = {
  pc: {
    text: {
      txt_pl14: css`
        font-family: SpoqaHanSans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.04em;
      `,
      txt_pr16: css`
        font-family: SpoqaHanSans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.04em;
      `,
      txt_pr22: css`
        font-family: SpoqaHanSans;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.04em;
      `,
    },
    header: {
      txt_pr38: css`
        font-family: SpoqaHanSans;
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 50px;
        letter-spacing: -0.04em;
      `,
    },
  },
};
const GlobalStyle = createGlobalStyle`


  html,
  body {
    height:100%;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  li{list-style:none;}
  a{text-decoration:none;

  color:rgb(28, 28, 28)}
  button{
    cursor:pointer;
    background-color: #fff;
    border:0;
  }

  section{
    .inner-container{
      width: 1140px; 
      margin:0 auto;
    }
  }
.section-title{
${fontSize.pc.header.txt_pr38}
  .title-point{
${fontSize.pc.text.txt_pl14}
  }
}
  .blind {
    display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;
  }
`;

export default GlobalStyle;
