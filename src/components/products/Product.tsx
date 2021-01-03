import styled from "styled-components";
import { Product as ProductModel } from "../../core/products";
import { Image } from "../Image";

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  background-color: #ccc;
`;

const Img = styled(Image)`
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
      <Img src="./img/slide12.jpeg" alt={`Prenda de vestir - ${name}`} />
      <Title>{name}</Title>
    </Container>
  );
};
 