import React, { useRef, useState } from "react";
import styled from "styled-components";
import useScroll from "../../lib/useScroll";
import TemplateBasic from "../templates/TemplateBasic";
import MoreSafer from "./sections/MoreSafer";
import QualityFirst from "./sections/QualityFirst";
import ShavingThreeStep from "./sections/ShavingThreeStep";
import Test from "./sections/Test";

const ArticleBlock = styled.article`
  height: 100%;
  section {
    height: 100%;
  }
`;
const ShavingGelProductDetail = () => {
  const [state, setstate] = useState("initialState");
  const scrollDownSection = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <TemplateBasic>
      <ArticleBlock>
        <h2 className="blind">쉐이빙젤</h2>
        <QualityFirst></QualityFirst>
        <MoreSafer></MoreSafer>
        <ShavingThreeStep></ShavingThreeStep>
        {/* <Test></Test> */}
      </ArticleBlock>
    </TemplateBasic>
  );
};

export default ShavingGelProductDetail;
