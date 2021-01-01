import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 10px;
  margin: 80px 0;
`

const Col = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`

const Col1 = styled(Col)`
  justify-content: flex-start;
`

const Col2 = styled(Col)`
  justify-content: flex-end;
`

export const Section1: React.FC = ({ children }) => {
  if (!Array.isArray(children)) return null

  return (
    <Container>
      <Col1>{children[0]}</Col1>
      <Col2>{children[1]}</Col2>
    </Container>
  )
}