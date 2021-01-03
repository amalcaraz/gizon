import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { device } from "../styles";
import { bgImage, Image } from "./Image";

const Img1 = styled.div<{src: string}>`
  && {
    ${bgImage}
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
`;

const Img2 = styled(Image)`
  && {
    width: 50% !important;
    height: auto;
  }
`;

const MyCarousel = styled(Carousel)`
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div<{ color?: string }>`
  height: 400px;
  width: 100%;
  overflow: hidden;
  ${({ color = "#ccc" }) => `background-color: ${color};`}

  @media ${device.tablet} {
    height: 600px;
  }

  @media ${device.laptop} {
    height: 800px;
    display: grid;
    grid-template:
      "col1 col2"
      auto / 50%;
  }
`;

const SlideCol = styled.div<{
  color?: string;
  n: number;
  hideMobile?: boolean;
}>`
  ${({ color = "#ccc" }) => `background-color: ${color};`}
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${({ n = 1 }) => `grid-area: col${n};`}

  display: ${({ hideMobile }) => (hideMobile ? "none" : "flex")};

  @media ${device.laptop} {
    display: flex;
  }
`;

const Container = styled.div`
  position: relative;
`;

const shadowWidth = 3;
const shadowRadix = 10;
const shadowColor = "rgba(0,0,0, 0.2)";

const TitleWrap = styled.div`
  font-family: 'Crimson Text', serif;
  position: absolute;
  text-align: center;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media ${device.mobileL} {
    width: 80%;
  }

  color: #fff;
  border-radius: 2px;
  text-shadow: ${shadowWidth}px ${shadowWidth}px ${shadowRadix}px ${shadowColor},
    -${shadowWidth}px -${shadowWidth}px ${shadowRadix}px ${shadowColor},
    ${shadowWidth}px -${shadowWidth}px ${shadowRadix}px ${shadowColor},
    -${shadowWidth}px ${shadowWidth}px ${shadowRadix}px ${shadowColor};
`;

const Title = styled.h1`
  font-size: 30px;
  text-transform: uppercase;
  font-style: normal;
  letter-spacing: 1px;
  font-weight: 600;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform-origin: 50% 50% 0px;
  margin-bottom: 20px;

  @media ${device.mobileL} {
    font-size: 40px;
  }
  @media ${device.tablet} {
    font-size: 60px;
  }
  @media ${device.laptop} {
    font-size: 80px;
  }
  @media ${device.laptopL} {
    font-size: 100px;
  }
`;

const Subtitle = styled.p`
  font-style: italic;
  font-size: 25px;

  @media ${device.mobileL} {
    font-size: 30px;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 50px;
  }
  @media ${device.laptopL} {
    font-size: 60px;
  }
`;

export interface HomeCarouselProps {
  title: string;
  subtitle: string;
}

export const HomeCarousel: React.FC<HomeCarouselProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Container>
      <MyCarousel
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000}
        infiniteLoop={true}
        interval={1000 * 5}
        dynamicHeight={false}
        emulateTouch={true}
        stopOnHover={false}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        <Slide>
          <SlideCol color="#4c1c38" n={1}>
            <Img2 src="./img/slide11.jpeg" alt="Parka de plumas con capucha verde para hombre" />
          </SlideCol>
          <SlideCol color="#232228" n={2} hideMobile>
            <Img1 src="./img/slide12.jpeg" title="Chaleco acolchado granate de invierno para hombre" />
          </SlideCol>
        </Slide>
        <Slide>
          <SlideCol color="#443563" n={2}>
            <Img2 src="./img/slide22.jpeg" alt="" />
          </SlideCol>
          <SlideCol color="#232228" n={1} hideMobile>
            <Img1 src="./img/slide21.jpeg" title="" />
          </SlideCol>
        </Slide>
        <Slide>
          <SlideCol color="#bf8a3d" n={1}>
            <Img2 src="./img/slide31.jpeg" alt="" />
          </SlideCol>
          <SlideCol color="#232228" n={2} hideMobile>
            <Img1 src="./img/slide32.jpeg" title="" />
          </SlideCol>
        </Slide>
      </MyCarousel>
      <TitleWrap>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrap>
    </Container>
  );
};
