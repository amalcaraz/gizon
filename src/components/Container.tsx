import React from 'react';
import styled from 'styled-components'
import { boxPadding, device, diviceSize } from '../styles';

const fixPercentage = 8

function fixWidth(width: number): number {
  return width - (width * (fixPercentage / 100))
}

const ContainerWrap = styled.div`
  margin: 0 auto;
  padding: 0 ${boxPadding}px;
  width: 100%;

  /* @media ${device.mobileS} {
    max-width: ${fixWidth(diviceSize.mobileS)}px;
  }
  @media ${device.mobileM} {
    max-width: ${fixWidth(diviceSize.mobileM)}px;
  }
  @media ${device.mobileL} {
    max-width: ${fixWidth(diviceSize.mobileL)}px;
  } */
  @media ${device.tablet} {
    padding: 0;
    max-width: ${fixWidth(diviceSize.tablet)}px;
  }
  @media ${device.laptop} {
    max-width: ${fixWidth(diviceSize.laptop)}px;
  }
  @media ${device.laptopL} {
    max-width: ${fixWidth(diviceSize.laptopL)}px;
  }
  @media ${device.desktop} {
    max-width: ${fixWidth(diviceSize.desktop)}px;
  }
`

export const Container: React.FC = ({ children }) => {
  return (<ContainerWrap>{children}</ContainerWrap>)
}
