import React from "react"
import styled from "styled-components"
import { Container } from "../components/Container"
import { Section1 } from "../components/Section1"
import { TextBox } from "../components/TextBox"
import { device } from "../styles"
import { HomeCarousel } from "../components/HomeCarousel"
import { Image } from "../components/Image"
import { PageMeta } from "../components/PageMeta"
import { RouteId } from "../core/routes"

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
      <PageMeta id={RouteId.HOME} />
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
  )
}
