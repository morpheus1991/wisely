import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fontSize } from "../../../styles/GlobalStyle";

const Block = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .slideArea {
    width: 100%;

    .slide-list {
      position: sticky;
      top: 0;

      > .item {
        position: absolute;
        top: 0;
        width: 100%;
        opacity: 0;
        visibility: hidden;
        transition: 0.5s;
        &.on {
          display: flex;
          opacity: 1;
          visibility: visible;
          .text-area-nav {
            &.currentActive1 {
              span:nth-child(1) {
                background: red;
                animation: nav-action;
              }
            }
            &.currentActive2 {
              span:nth-child(2) {
                background: red;
                animation: nav-action;
              }
            }
            &.currentActive3 {
              span:nth-child(3) {
                background: red;
                animation: nav-action;
              }
            }
          }
        }
        @animation nav-action {
          0% {
            background: red;
          }
          100% {
            background: blue;
          }
        }
        > .item-inner {
          display: flex;
          width: 100%;
          height: 100%;
          .image-area {
            background: red;
            width: 50%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .text-area {
            display: flex;
            align-items: center;
            width: 50%;
            .text-area-inner {
              width: 100%;
              min-height: 400px;
              margin: auto 0;
              text-align: center;
              .text-area-nav {
                display: flex;
                justify-content: center;
                width: 100%;
                > span {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 8px 18px;
                  border-radius: 10px;
                  position: relative;
                  transition: 1s;
                  ${fontSize.pc.text.txt_pr16}
                  & + span {
                    margin-left: 20px;
                    &:before {
                      content: "";
                      width: 10px;
                      height: 10px;
                      margin: 0 10px;
                      background: red;
                      position: absolute;
                      left: -24px;
                    }
                  }
                }
                & + .title {
                  margin-top: 70px;
                }
              }
              > a {
                display: inline-block;
                margin-top: 40px;
              }
              .title {
                width: 100%;
                display: flex;
                justify-content: center;
                ${fontSize.pc.header.txt_pr38}
              }
              .description {
                margin-top: 29px;
                width: 100%;
                display: flex;
                justify-content: center;
                ${fontSize.pc.text.txt_pl14}
              }
            }
          }
        }
      }
    }
  }
  .emptyArea {
    height: 100%;
    .item {
      height: 100%;
    }
  }
`;
const ShavingthreeStep = () => {
  const [stepInfo, setStepInfo] = useState([
    {
      title: (
        <h4 className="title">
          자극없는 면도의 정석은
          <br /> 3단계로 구성됩니다
        </h4>
      ),
      description: (
        <p className="description">
          많은 남성들이 지키지 않는 면도의 정석.
          <br />
          면도와 면도 전후 관리가 더해진 3단계 면도용품은
          <br />
          부드럽고 건강한 면도를 도와줍니다.
        </p>
      ),
      subTitle: null,
      link: null,
    },
    {
      title: (
        <h4 className="title">
          면도 전 수염을 잘리기 쉽게
          <br /> 준비시켜주는 쉐이빙 젤
        </h4>
      ),
      description: (
        <p className="description">
          수염을 불려서 쉽게 잘리도록 도와주고, 면도날이 <br /> 피부를 자극하지
          않도록 쿠션 역할을 해줍니다.
        </p>
      ),
      subTitle: <span>1.쉐이빙젤</span>,
      link: <a href="">더 알아보기</a>,
    },
    {
      title: (
        <h4 className="title">
          남김없이 깔끔하게 잘라주는
          <br />
          독일산 5중 면도날
        </h4>
      ),
      description: (
        <p className="description">
          품질 좋은 면도날로 깔끔하게 면도하세요.
          <br />턱 굴곡을 부드럽게 따라가며 수염을 절삭해줍니다.
        </p>
      ),
      subTitle: <span>2.면도</span>,
      link: <a href="">더 알아보기</a>,
    },
    {
      title: (
        <h4 className="title">
          자극받은 피부를 진정 시키는
          <br />
          애프터쉐이브
        </h4>
      ),
      description: (
        <p className="description">
          면도날의 미세자극을 부드럽게 케어해줍니다.
          <br /> 트러블이나 건조함도 쉽게 관리할 수 있어요.
        </p>
      ),
      subTitle: <span>3.에프터쉐이브</span>,
      link: <a href="">더 알아보기</a>,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null); //타겟element
  const imaegeAreaRef = useRef<HTMLImageElement>(null);
  const innerHeight = window.innerHeight; //브라우저 화면 높이

  const guideLine = window.innerHeight - window.scrollY - innerHeight / 2; //가상의 중앙선 높이
  useEffect(() => {
    const items = targetRef.current?.querySelectorAll(
      ".item"
    ) as NodeListOf<Element>;
    const targetRect = targetRef.current?.getBoundingClientRect();

    window.addEventListener("scroll", () => {
      const targetTop = targetRef.current?.getBoundingClientRect()
        .top as number;
      const sectionDivideValue = parseInt(
        String((targetRect?.height as number) / (stepInfo.length + 1))
      );
      const index = Math.abs(parseInt(String(targetTop / sectionDivideValue)));
      if (index < stepInfo.length && 0 > targetTop) {
        console.log("범위 해당됨");
        console.log(items);
        items.forEach((item) => {
          item.classList.remove("on");
          item
            .querySelector(`.text-area-nav`)
            ?.setAttribute(
              "class",
              `text-area-nav currentActive${currentIndex}`
            );
        });
        items[index].classList.add("on");

        if (index !== currentIndex) {
          setCurrentIndex(index);
        }
      }
      console.log(
        "scrollY",
        window.scrollY,
        "targetTop",
        targetTop,
        "sectionDivideValue",
        sectionDivideValue
      );
      console.log(sectionDivideValue);

      console.log(index);
    });
  }, [currentIndex]);
  return (
    <Block>
      <div className="slideArea" ref={targetRef}>
        <ul className="slide-list">
          {stepInfo.map((item, i) => (
            <li className="item">
              <div className="item-inner">
                <div className="text-area">
                  <div className="text-area-inner">
                    <nav className="text-area-nav">
                      {stepInfo.map((item) => item.subTitle)}
                    </nav>
                    {item.title}
                    {item.description}
                    {item.link}
                  </div>
                </div>
                <div className="image-area">
                  <img src={`/ShavingThreeStep${i + 1}.png`} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="emptyArea"
        style={{ height: `${stepInfo.length}00%` }}
      ></div>
    </Block>
  );
};

export default ShavingthreeStep;
