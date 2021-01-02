import styled from "styled-components"

const Container = styled.div`
`

const Title = styled.h3`
  font-size: 24px;
  letter-spacing: .15px;
  text-transform: uppercase;
  font-style: normal;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: .7rem;
`

export interface ProductProps {
}

export const Product: React.FC<ProductProps> = () => {
  return (
    <Container>
      <Title>Encuentranos en</Title>
    </Container>
  )
}
