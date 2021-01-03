import styled from "styled-components";
import { Product as ProductModel } from "../../core/products";

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  background-color: #ccc;
`;

const Img = styled.img`
  width: 50%;
  height: auto;
`;

const Title = styled.figcaption`
  font-size: 24px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  font-style: normal;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: 0.7rem;
`;

export type ProductProps = ProductModel;

export const Product: React.FC<ProductProps> = ({ name, img }) => {
  return (
    <Container>
      <Img src={img} />
      <Title>{name}</Title>
    </Container>
  );
};
