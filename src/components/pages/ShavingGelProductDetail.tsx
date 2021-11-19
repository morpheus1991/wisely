import React, { useRef, useState } from "react";
import styled from "styled-components";
import useScroll from "../../lib/useScroll";
import TemplateBasic from "../templates/TemplateBasic";
import MoreSafer from "./sections/MoreSafer";
import QualityFirst from "./sections/QualityFirst";
import ShavingThreeStep from "./sections/ShavingThreeStep";

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
        <h2>쉐이빙젤</h2>
        <QualityFirst></QualityFirst>
        <MoreSafer></MoreSafer>
        <section className="section safe-shavinggel">
          <div className="text-area">
            <h3 className="section-title">
              <div className="title-point">Design</div>
              더 안전하고,
              <br /> 편리해진 쉐이빙젤
            </h3>
            <p>
              폭리와 가격거품은 모두 덜어내고, 품질에 과감하게 투자했습니다.
              시중 업체들이 따라올 수 없는 품질과 가격에는 이유가 있습니다. *
              면도 구독서비스 1위 (2020년 2월, 오픈서베이)
            </p>
          </div>
          <div className="image-area">
            <div className="image-wrapper">
              <div className="image"></div>
              <div className="image cover"></div>
            </div>
          </div>
        </section>
        <ShavingThreeStep></ShavingThreeStep>
      </ArticleBlock>
    </TemplateBasic>
  );
};

export default ShavingGelProductDetail;
