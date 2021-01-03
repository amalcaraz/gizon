import styled from "styled-components";
import { Product } from "./Product";
import { Product as ProductModel } from "../../core/products";

const Container = styled.figure`
  display: flex;
  flex-direction: column;
`;

export interface ProductGridProps {
  products: ProductModel[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </Container>
  );
};
