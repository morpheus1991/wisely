import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../UI/svg/Logo";

/* desktop */
const DefaultHeaderBlock = styled.div`
  width: 100%;
`;
const InnerContainer = styled.div`
  /* width: 1140px; */
  margin: 0 auto;
  padding: 0 18px;

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
            <Link to="/">
              <Logo></Logo>
            </Link>
          </h1>
        </LogoArea>
      </InnerContainer>
    </DefaultHeaderBlock>
  );
};
export default DefaultHeader;
