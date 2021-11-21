import React, { useState, useRef, useEffect, createRef } from "react";
import styled from "styled-components";
import { fontSize } from "../../../styles/GlobalStyle";
import theme from "../../../styles/theme";
const Block = styled.section`
  @media ${theme.media.desktop} {
    display: flex;
    height: auto !important;
    padding: 0 20px;
    .inner-container {
      display: flex;
      align-items: flex-start;
      /* width: 768px; */
      > .fixed-text-area {
        position: sticky;
        top: 0;
        width: 280px;
        text-align: left;
        display: flex;
        align-items: center;
        height: 100vh;
        margin-right: 106px;
        > .inner {
          span {
            padding-top: 200px;
            color: #0055b8;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 130%;
            letter-spacing: -0.04em;
          }
          h3 {
            ${fontSize.pc.header.txt_pr38}
          }
        }
      }
      > .vertical-slide-area {
        width: calc(100% - 386px);
        > ul {
          padding-top: 700px;
          > li {
            width: 340px;
            transition: 0.5s;
            opacity: 0.2;
            &.active {
              opacity: 1;
            }
            &:nth-child(even) {
              /* background: red; */
              position: relative;
              transform: translateX(calc(110%));
              /* height: 214px; */
              /* margin-left: 60px; */
            }
            &:last-child {
              /* padding-bottom: 160px; */
            }
            .image-area {
              height: 448px;
              background: #fafafa;
              & + .text-area {
                margin-top: 40px;
              }
            }
            .text-area {
              width: 100%;
              text-align: center;
              dt {
                ${fontSize.pc.text.txt_pr22}
              }
              dd {
                margin-top: 14px;
                ${fontSize.pc.text.txt_pl14}
              }
            }
          }
        }
      }
    }
    &.pc-small-mode {
      background: pink;
      .inner-container {
        justify-content: center;
      }
      .vertical-slide-area {
        width: auto;
        > ul {
          > li {
            + li {
              margin-top: 60px;
            }
            &:nth-child(even) {
              transform: translateY(0) translateX(0);
            }
            &:last-child {
              padding-bottom: 200px;
            }
          }
        }
      }
    }
  }
  @media ${theme.media.mobile} {
    height: auto !important;
    margin-top: 120px;
    .inner-container {
      width: 100%;
      > .fixed-text-area {
        > .inner {
          span {
            ${fontSize.mobile.text.txt_mr12}
            &+h3 {
              margin-top: 16px;
            }
          }
          h3 {
            ${fontSize.mobile.headers.txt_mr26}
          }
        }
        & + .vertical-slide-area {
          margin-top: 56px;
        }
      }
      > .vertical-slide-area {
        > ul {
          > li {
            opacity: 0.3;
            transition: 1s;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            + li {
              margin-top: 90px;
            }
            &.active {
              opacity: 1;
            }
            .image-area {
              width: 100%;
              img {
                width: 300px;
                height: 380px;
              }
              & + .text-area {
                margin-top: 26px;
              }
            }
            .text-area {
              dt {
                ${fontSize.mobile.text.txt_mr18}
              }
              dd {
                ${fontSize.mobile.text.txt_ml14}
                margin-top: 12px;
              }
            }
          }
        }
      }
    }
  }
`;
const MoreSafer = () => {
  const [listInfo, setListInfo] = useState([
    {
      textArea: (
        <dl className="text-area">
          <dt>LPG가스를 공기로 바꾸다.</dt>
          <dd>
            압축 공기로 내용물을 분사하는 새로운 기술.
            <br /> 폭발위험이 적고, 가스 흡입 우려도 없어 안전합니다.
          </dd>
        </dl>
      ),
    },
    {
      textArea: (
        <dl className="text-area">
          <dt>
            잔량 확인도 쉽고,
            <br /> 끝까지 다 나오는 내용물
          </dt>
          <dd>
            투명한 측면 게이지로 잔량을
            <br /> 눈으로 확인할 수 있습니다.
          </dd>
        </dl>
      ),
    },
    {
      textArea: (
        <dl className="text-area">
          <dt>
            잔량 확인도 쉽고,
            <br /> 끝까지 다 나오는 내용물
          </dt>
          <dd>
            투명한 측면 게이지로 잔량을
            <br /> 눈으로 확인할 수 있습니다.
          </dd>
        </dl>
      ),
    },
  ]);
  const itemRefs = useRef(listInfo.map(() => createRef()));
  const containerRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLDivElement>(null); //타겟element
  const innerHeight = window.innerHeight; //브라우저 화면 높이
  const guideLine = window.innerHeight - window.scrollY - innerHeight / 2; //가상의 중앙선 높이
  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (768 < innerWidth) {
      if (innerWidth < 1140) {
        console.log("innerWidth 768~ 1140");
        containerRef.current?.classList.add("pc-small-mode");
      }
    }
    if (1140 < innerWidth) {
      containerRef.current?.classList.remove("pc-small-mode");
    }
    window.addEventListener("resize", () => {
      console.log("resize동작");

      const innerWidth = window.innerWidth;
      console.log("innerWidth :", innerWidth);

      if (768 < innerWidth) {
        if (innerWidth < 1140) {
          console.log("innerWidth 768~ 1140");
          containerRef.current?.classList.add("pc-small-mode");
        }
      }
      if (1140 < innerWidth) {
        containerRef.current?.classList.remove("pc-small-mode");
      }
    });
    const elements = itemRefs.current.map((item) => item.current) as Element[];
    const getElementsTopValue = (elements: Element[]) => {
      const res: number[] = [];
      elements.forEach((el) => {
        console.log(el.getBoundingClientRect());
        const topValue = String(el.getBoundingClientRect().top);
        res.push(parseInt(topValue));
      });
      return res;
    };
    const elementsTopValues = getElementsTopValue(elements);
    window.addEventListener("scroll", () => {
      elements.forEach((item, i) => {
        if (elementsTopValues[i] - window.scrollY - innerHeight * 0.5 < 0) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  }, []);
  return (
    <Block className="section more-safer" ref={containerRef}>
      <div className="inner-container">
        <div className="fixed-text-area">
          <div className="inner">
            <span>Design</span>
            <h3>
              더 안전하고,
              <br /> 편리해진 쉐이빙젤
            </h3>
          </div>
        </div>
        <div className="vertical-slide-area">
          <ul>
            {listInfo.map((item, i) => (
              <li
                key={i}
                ref={itemRefs.current[i] as React.RefObject<HTMLLIElement>}
              >
                <div className="image-area">
                  <img src={`/MoreSaferImage${i + 1}.png`} alt="" />
                </div>
                {item.textArea}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Block>
  );
};

export default MoreSafer;
