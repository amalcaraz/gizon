import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Section1 } from "../components/Section1";
import { TextBox } from "../components/TextBox";
import { device } from "../styles";
import { HomeCarousel } from "../components/HomeCarousel";
import { Helmet } from "react-helmet";
import { Image } from "../components/Image";

const Img = styled(Image)`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    width: 80%;
  }
`;

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>GIZON Moda | Nueva Colección Invierno Hombre</title>
        <meta name="description" content="Descubre la nueva colección otoño - invierno 2020 de GIZON online. Las últimas tendencias en ropa de hombre, caballero y joven disponible también en nuestra tienda de Barakaldo." />
      </Helmet>
      <HomeCarousel title="Nueva colección" subtitle="Otoño - Invierno" />
      <Container>
        <Section1 reverse>
          <TextBox title="Materiales ecofriendly" quote="Calidad">
            <p>
              Las prendas producidas para Gizon están elaboradas con los tejidos
              naturales e innovadores de la mayor alta gama.
            </p>
            <p>
              Compartimos una visión sostenible con el medio ambiente y entre
              nuestras prendas, podrás encontrar pantalones elaborados con
              originales materias primas como posos de café o fibra de bambú.
            </p>
          </TextBox>
          <Img src="./img/home2.jpeg" alt="Prendas de calidad"/>
        </Section1>
        <Section1>
          <TextBox title="Atención personalizada" quote="Diseño">
            <p>
              Nuestra compañía destaca por un personal cualificado y atento que
              te asesora de manera exclusiva, creando outfits únicos y
              personalizados.
            </p>
            <p>
              Además, ofrecemos a nuestros clientes un servicio de sastrería y
              arreglos a medida.
            </p>
          </TextBox>
          <Img src="./img/home4.jpeg" alt="Ropa a medida"/>
        </Section1>
      </Container>
    </>
  );
};
