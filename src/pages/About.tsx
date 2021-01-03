import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Section1 } from "../components/Section1";
import { TextBox } from "../components/TextBox";
import home1 from "../resources/img/home1.jpg";

const Img = styled.img`
  width: 80%;
  height: auto;
`;

export const About: React.FC = () => {
  return (
    <Container>
      <Section1>
        <TextBox title="Nuestra Historia" quote="Origen">
          <p>
            La familia Gizon es un negocio textil que lleva en la industria de
            la moda vasca más de cincuenta años.
          </p>
          <p>
            Nuestra tienda es un referente en el estilismo de caballero y joven
            en Barakaldo que cuenta con las mejores materias primas de
            fabricación española.
          </p>
        </TextBox>
        <Img src={home1} />
      </Section1>
    </Container>
  );
};
