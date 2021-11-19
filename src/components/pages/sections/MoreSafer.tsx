import React, { useState, useRef, useEffect, createRef } from "react";
import styled from "styled-components";
import { fontSize } from "../../../styles/GlobalStyle";
const Block = styled.section`
  display: flex;
  height: auto !important;
  .inner-container {
    display: flex;
    align-items: flex-start;
    > .fixed-text-area {
      position: sticky;
      padding-top: 260px;
      top: 0;
      width: 50%;
      text-align: left;
      height: auto;
      padding-bottom: 280px;
      span {
        padding-top: 200px;
        color: #0055b8;
        font-family: SpoqaHanSans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 130%;
        letter-spacing: -0.04em;
      }
      h3 {
        font-family: SpoqaHanSans;
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 50px;
        letter-spacing: -0.04em;
      }
    }
    > .vertical-slide-area {
      width: 50%;
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
            background: red;
            position: relative;
            transform: translateX(100%) translateY(-80%);
            height: 214px;
            margin-left: 60px;
          }
          &:last-child {
            padding-bottom: 300px;
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
    const elements = itemRefs.current.map((item) => item.current) as Element[];
    const containerElement = containerRef.current as Element;
    const getElementsTopValue = (elements: Element[]) => {
      const res: number[] = [];
      elements.forEach((el) => {
        console.log(el.getBoundingClientRect());
        const topValue = String(el.getBoundingClientRect().top);
        res.push(parseInt(topValue));
      });
      // console.log(res);
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
        // console.log(`${i}번째`, window.innerHeight);
      });
    });
  }, [listInfo]);
  return (
    <Block className="section more-safer" ref={containerRef}>
      <div className="inner-container">
        <div className="fixed-text-area">
          <span>Design</span>
          <h3>
            더 안전하고,
            <br /> 편리해진 쉐이빙젤
          </h3>
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
