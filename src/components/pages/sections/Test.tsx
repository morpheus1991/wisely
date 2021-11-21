import React from "react";
import styled from "styled-components";

const Block = styled.div`
  height: 4000px;
  background: red;

  .aaa {
    position: sticky;
    top: 0;
    height: 100px;
    background: blue;
  }
  .bbb {
  }
`;
const Test = () => {
  return (
    <Block>
      <div className="aaa"></div>
      <div className="bbb"></div>
    </Block>
  );
};

export default Test;
