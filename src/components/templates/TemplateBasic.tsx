import React, { ReactNode } from "react";
import styled from "styled-components";
import DefaultFooter from "./footer/DefaultFooter";
import DefaultHeader from "./header/DefaultHeader";
/* type */
interface TemplateBasicProps {
  article: any;
  header?: any;
  footer?: any;
}

/* style */

const TemplateBasicBlock = styled.div`
  div {
    ${({ theme }) => theme.media.desktop`
    background: red;
  `}
  }
`;

/* JSX */
const TemplateBasic = () => {
  return (
    <TemplateBasicBlock>
      <DefaultHeader></DefaultHeader>
      <article></article>
      <DefaultFooter></DefaultFooter>
    </TemplateBasicBlock>
  );
};

export default TemplateBasic;
