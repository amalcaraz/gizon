import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'react-awesome-slider/dist/styles.css';
import { textColor } from './vars';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  // @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');

  body {
    font-family: 'Crimson Text', serif;
    font-weight: 400;
    background-color: #fff;
    color: ${textColor};
    overflow-y: scroll;
    overflow-x: hidden!important;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background: #080808;
  }

  a, a:link, a:visited, a:focus, a:hover, a:active {
    position: relative;
    font-family: 'Crimson Text', serif;
    text-decoration: none;
    color: ${textColor};

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
`
