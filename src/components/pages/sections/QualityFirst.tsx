import { throttle } from "lodash";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
const Block = styled.section`
  margin-top: 500px;
  .image-area {
    position: relative;

    .image-wrapper {
      display: flex;
      align-items: flex-end;
      width: 500px;
      height: 500px;
    }
    .image {
      position: absolute;
      bottom: 0;
      display: flex;
      overflow: hidden;
      width: 100%;
      height: 100%;
      align-items: flex-end;
      transition: 0.1s;
      img {
        width: 500px;
        height: 500px;
      }
      &.cover {
      }
    }
  }
`;

const QualityFirst = () => {
  const targetRef = useRef<HTMLDivElement>(null); //타겟element
  const innerHeight = window.innerHeight; //브라우저 화면 높이
  const guideLine = window.innerHeight - window.scrollY - innerHeight / 2; //가상의 중앙선 높이

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const targetRectInfo =
        targetRef.current?.getBoundingClientRect() as DOMRect;
      const targetTopValue = targetRectInfo.top;
      const targetHeight = targetRectInfo.height;
      const calcProgress = () => {
        const heightToreduce = targetHeight - (guideLine - targetRectInfo.top);
        return heightToreduce;
      };

      if (guideLine && targetTopValue) {
        const heightToreduceValue = calcProgress();
        targetRef!.current!.style.height = `${heightToreduceValue}px`;
      }
    });
  }, []);
  return (
    <Block className="section quality-first">
      <div className="text-area">
        <h3 className="section-title">
          거품을 덜어내고,
          <br /> 품질에 투자 하다.
        </h3>
        <p>
          폭리와 가격거품은 모두 덜어내고, 품질에 과감하게 투자했습니다. 시중
          업체들이 따라올 수 없는 품질과 가격에는 이유가 있습니다. * 면도
          구독서비스 1위 (2020년 2월, 오픈서베이)
        </p>
      </div>
      <div className="image-area" style={{ border: "1px solid blue" }}>
        <div className="image-wrapper">
          <div className="image">
            <img src="/razor_500x500.png" alt=" " />
          </div>
          <div className="image cover" ref={targetRef}>
            <img src="/bubble_500x500.png" alt=" " />
          </div>
        </div>
      </div>
    </Block>
  );
};

export default QualityFirst;
