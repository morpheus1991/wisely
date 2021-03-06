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
  const targetRef = useRef<HTMLDivElement>(null); //??????element

  useEffect(() => {
    const innerHeight = window.innerHeight; //???????????? ?????? ??????
    const guideLine = window.innerHeight - window.scrollY - innerHeight / 2; //????????? ????????? ??????
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
            ????????? ????????????,
            <br /> ????????? ?????? ??????.
          </h3>
          <p>
            ????????? ??????????????? ?????? ????????????, ????????? ???????????? ??????????????????. ??????
            ???????????? ????????? ??? ?????? ????????? ???????????? ????????? ????????????.
            <div>* ?????? ??????????????? 1??? (2020??? 2???, ???????????????)</div>
          </p>
        </div>
      </div>
    </Block>
  );
};

export default QualityFirst;
