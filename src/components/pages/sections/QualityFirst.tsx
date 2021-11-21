import { throttle } from "lodash";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { fontSize } from "../../../styles/GlobalStyle";
import theme from "../../../styles/theme";
const Block = styled.section`
  @media ${theme.media.desktop} {
    display: flex;
    align-items: center;
    height: 100%;
    max-height: 800px;
    .image-area {
      height: 100%;
      width: 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .image-wrapper {
        display: flex;
        align-items: flex-end;
        width: 420px;
        height: 420px;
        position: relative;
      }
      .image {
        position: absolute;
        bottom: 0;
        left: 0;
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
    .text-area {
      height: 100%;
      display: flex;
      align-items: center;
      width: 50%;
      flex-wrap: wrap;
      > .inner {
        width: 420px;
        text-align: left;
        padding-left: 11%;
        .section-title {
          & + p {
            margin-top: 26px;
          }
        }
      }
    }
  }
  @media ${theme.media.mobile} {
    .image-area {
      display: flex;
      justify-content: center;
      .image-wrapper {
        display: flex;
        align-items: flex-end;
        width: 280px;
        height: 280px;
        position: relative;
        .image {
          position: absolute;
          bottom: 0;
          left: 0;
          display: flex;
          overflow: hidden;
          width: 100%;
          height: 100%;
          align-items: flex-end;
          transition: 0.1s;
          img {
            width: 280px;
            height: 280px;
          }
        }
      }
    }
    .text-area {
      margin-top: 40px;
      > .inner {
        max-width: 320px;
        margin: 0 auto;
        .section-title {
          ${fontSize.mobile.headers.txt_mr28}
          & + p {
            margin-top: 18px;
            ${fontSize.mobile.text.txt_ml14}
            >div {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
`;

const QualityFirst = () => {
  const targetRef = useRef<HTMLDivElement>(null); //타겟element

  useEffect(() => {
    const innerHeight = window.innerHeight; //브라우저 화면 높이
    const guideLine = window.innerHeight - window.scrollY - innerHeight / 2; //가상의 중앙선 높이
    let targetRectInfo = targetRef.current?.getBoundingClientRect() as DOMRect;
    let targetTopValue = targetRectInfo.top;
    if (targetRef && targetRectInfo.top && targetTopValue) {
      window.addEventListener("scroll", () => {
        targetRectInfo = targetRef.current?.getBoundingClientRect() as DOMRect;
        if (targetRectInfo) {
          targetTopValue = targetRectInfo.top;
        }
        const targetHeight = targetRectInfo.height;
        const calcProgress = (ratio: number) => {
          const heightToreduce =
            targetHeight - (guideLine - targetRectInfo.top) * ratio;
          return heightToreduce;
        };

        if (guideLine && targetTopValue) {
          const heightToreduceValue = calcProgress(0.5);
          targetRef!.current!.style.height = `${heightToreduceValue}px`;
        }
      });
    }
  }, []);
  return (
    <Block className="section quality-first">
      <div className="image-area">
        <div className="image-wrapper">
          <div className="image">
            <img src="/razor_500x500.png" alt=" " />
          </div>
          <div className="image cover" ref={targetRef}>
            <img src="/bubble_500x500.png" alt=" " />
          </div>
        </div>
      </div>
      <div className="text-area">
        <div className="inner">
          <h3 className="section-title">
            거품을 덜어내고,
            <br /> 품질에 투자 하다.
          </h3>
          <p>
            폭리와 가격거품은 모두 덜어내고, 품질에 과감하게 투자했습니다. 시중
            업체들이 따라올 수 없는 품질과 가격에는 이유가 있습니다.
            <div>* 면도 구독서비스 1위 (2020년 2월, 오픈서베이)</div>
          </p>
        </div>
      </div>
    </Block>
  );
};

export default QualityFirst;
