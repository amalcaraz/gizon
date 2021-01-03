import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Image } from "../components/Image";
import { Section1 } from "../components/Section1";
import { TextBox } from "../components/TextBox";

const Img = styled(Image)`
  width: 80%;
  height: auto;
`;

export const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Conoce nuestra historia | GIZON Moda</title>
        <meta name="description" content="GIZON lleva más de cincuenta años en la industria de la moda vasca. Visita nuestra tienda en Barakaldo, déjate asesorar por nuestro equipo de manera personalizada." />
      </Helmet>
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
          <Img src="./img/home1.jpeg" alt="Conoce nuestra historia"/>
        </Section1>
      </Container>
    </>
  );
};
