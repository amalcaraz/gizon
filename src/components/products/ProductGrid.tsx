import styled from "styled-components"
import { Product } from "./Product"
import { Product as ProductModel } from "../../core/products"

const Container = styled.figure`
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
`

const Title = styled.figcaption`
  font-size: 24px;
  letter-spacing: .15px;
  text-transform: uppercase;
  font-style: normal;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: .7rem;
`

export interface ProductGridProps {
  products: ProductModel[]
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Container>
      {products.map(product => <Product {...product} />)}
    </Container>
  )
}
