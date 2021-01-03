import styled, { css } from "styled-components";
import { boxPadding, device } from "../styles";

const Container = styled.div`
  padding: ${boxPadding}px 0;

  @media ${device.laptop} {
    padding: ${boxPadding / 2}px;
    max-width: 500px;
  }
`;

const CommonText = css`
  line-height: 24px;
  font-weight: 400;
  color: #777;
`;

const Quote = styled.h6`
  ${CommonText}
  font-size: 18px;
  font-style: italic;
  letter-spacing: 0;
  text-transform: capitalize;

  @media ${device.tablet} {
    font-size: 22px;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  margin: 1rem 0;

  @media ${device.tablet} {
    font-size: 40px;
  }
`;

const Text = styled.div`
  ${CommonText}
  font-family: roboto, sans-serif;
`;

export interface TextBoxProps {
  title: string;
  quote?: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ quote, title, children }) => {
  return (
    <Container>
      {quote && <Quote>{quote}</Quote>}
      <Title>{title}</Title>
      <Text>{children}</Text>
    </Container>
  );
};
