import React from "react";
import styled from "styled-components";
import Close from "../../UI/svg/Close";
import Crat from "../../UI/svg/Crat";
import Hambuger from "../../UI/svg/Hambuger";
import Logo from "../../UI/svg/Logo";
import Menus from "../../UI/svg/Menus";
import theme from "../../../styles/theme";

/* 
미디어쿼리
@media ${(props) => props.theme.media.desktop} {
}; 
*/

/* desktop */
const DefaultHeaderBlock = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;
const InnerContainer = styled.div`
  width: 1140px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.desktop} {
    display: flex;
  } ;
`;
const LogoArea = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  h1 {
    width: 94px;
    height: 16px;
    display: flex;
    align-items: center;
  }
`;

interface DefaultHeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenuOpen: () => void;
}
const DefaultHeader = ({
  mobileMenuOpen,
  toggleMobileMenuOpen,
}: DefaultHeaderProps) => {
  return (
    <DefaultHeaderBlock>
      <InnerContainer>
        <LogoArea>
          <h1>
            <Logo></Logo>
          </h1>
        </LogoArea>
      </InnerContainer>
    </DefaultHeaderBlock>
  );
};
export default DefaultHeader;
