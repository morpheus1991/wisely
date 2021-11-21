import React, { ReactChild, ReactNode, useState } from "react";
import styled from "styled-components";
import DefatultArticle from "./article/DefatultArticle";
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
  .templateArticle {
    margin-top: 60px;
    /* height: 100vh; */
  }
`;

/* JSX */
const TemplateBasic = ({ children }: { children: ReactChild }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenuOpen = () => {
    console.log(mobileMenuOpen);
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <TemplateBasicBlock>
      <DefaultHeader
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenuOpen={toggleMobileMenuOpen}
      ></DefaultHeader>
      <DefatultArticle children={children}></DefatultArticle>
      <DefaultFooter></DefaultFooter>
    </TemplateBasicBlock>
  );
};

export default TemplateBasic;
