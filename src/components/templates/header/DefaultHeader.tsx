import React from "react";
import styled from "styled-components";
import Logo from "../../UI/svg/Logo";

const DefaultHeaderBlock = styled.div``;
const InnerContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
const LogaArea = styled.div`
  width: 97px;
  height: 15.55px;
`;
const Nav = styled.div`
  ul {
    li {
      & + li {
        margin-left: 40px;
      }
    }
  }
`;

const DefaultHeader = () => {
  return (
    <DefaultHeaderBlock>
      <InnerContainer>
        <LogaArea>
          <Logo />
        </LogaArea>
        <Nav>
          <ul>
            <li>
              <a href="">구독하기</a>
            </li>
            <li>
              <a href="">상품보기</a>
            </li>
            <li>
              <a href="">와이즐리 이야기</a>
            </li>
            <li>
              <a href="">고객센터</a>
            </li>
          </ul>
        </Nav>
      </InnerContainer>
    </DefaultHeaderBlock>
  );
};

export default DefaultHeader;
