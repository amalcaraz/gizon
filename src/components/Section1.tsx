import React from 'react';
import styled from 'styled-components';
import { device } from '../styles';

const Container = styled.section`
  display: grid;
  margin: 20px 0;

  grid-template: 
    "col1"
    "col2"
    auto / 100%;

  @media ${device.tablet} {
    grid-template: 
      "col1 col2"
      auto / 50%;
  }

  @media ${device.tablet} {
    margin: 80px 0;
  }
`

const Col = styled.div<{ reverse?: boolean }>`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    ${({ reverse }) => reverse ? `
      justify-content: flex-start;
      grid-area: col1;
    ` : `
      justify-content: flex-end;
      grid-area: col2;
    `}
  }  
`

export interface Section1Props {
  reverse?: boolean
}

export const Section1: React.FC<Section1Props> = ({ reverse, children }) => {
  if (!Array.isArray(children)) return null

  return (
    <Container>
      <Col reverse={!reverse}>{children[0]}</Col>
      <Col reverse={!!reverse}>{children[1]}</Col>
    </Container>
  )
}