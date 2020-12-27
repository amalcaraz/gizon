import React from 'react';
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  background-color: rgba(10, 10, 10, 0);
  height: 102px;
`

export const NotFound: React.FC = () => {
  return (<NotFoundContainer>404 not found</NotFoundContainer>)
}