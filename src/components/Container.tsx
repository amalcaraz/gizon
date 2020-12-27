import React from 'react';
import styled from 'styled-components'
import { device } from '../styles';

const ContainerWrap = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 320px;

  @media ${device.mobileM} { 
    max-width: 600px;
  }

  @media ${device.tablet} { 
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`

export const Container: React.FC = ({ children }) => {
  return (<ContainerWrap>{children}</ContainerWrap>)
}
