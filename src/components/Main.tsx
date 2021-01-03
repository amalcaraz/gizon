import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.main`
  position: relative;
  background-color: #fff;
  min-height: 400px;
  // overflow: hidden;
  margin: 0 auto;
`

export const Main: React.FC = ({ children }) => {
  return (
    <MainContainer>
      {children}
    </MainContainer>)
}