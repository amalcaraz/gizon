import React from 'react';
import styled from 'styled-components'
import AwesomeSlider from 'react-awesome-slider';
const { default: withAutoplay } = require('react-awesome-slider/dist/autoplay');

const Slider = withAutoplay(AwesomeSlider)

const MainContainer = styled.main`
  background-color: rgba(200, 200, 200, 1);
  height: 550px;
  overflow: hidden;
`

export const Main: React.FC = ({ children }) => {
  return (
    <MainContainer>
      <Slider
        play={true}
        cancelOnInteraction={false}
        interval={1000 * 2}
      >
        <div data-src="https://www.dosgalgos.com/images/empresa/Catalogo-DosGalgos-FW19-41.jpg" />
        <div data-src="https://www.dosgalgos.com/images/empresa/Catalogo-DosGalgos-FW19-4.jpg" />
        <div data-src="https://www.dosgalgos.com/images/empresa/Catalogo-DosGalgos-FW19-11.jpg" />
        <div data-src="https://www.carloscordoba.es/wp-content/uploads/2019/11/IMG_2109.jpg" />
      </Slider>
    </MainContainer>)
}