import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { textColor } from "./vars";
import { device } from "./responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Crimson Text', serif;
    font-weight: 400;
    background-color: #fff;
    color: ${textColor};
    overflow-y: scroll;
    overflow-x: hidden !important;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
  }

  p {
    font-family: roboto, sans-serif;
    line-height: 24px;
    font-weight: 400;
    color: #777;
  }

  h1 {
    text-transform: uppercase;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    margin: 1rem 0;

    @media ${device.tablet} {
      font-size: 40px;
    }
  }

  ::selection {
    background: #080808;
  }

  a, a:link, a:visited, a:focus, a:hover, a:active {
    position: relative;
    font-family: 'Crimson Text', serif;
    text-decoration: none;
    color: ${textColor};
    line-height: 1.5rem;

    &:after {
      position: absolute;
      content: '';
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${textColor};
      opacity: 0;
      transition: opacity .25s 0s linear;
    }

    &:hover, &.active {
      &:after {
        opacity: 1;
      }
    }
  }
`;
