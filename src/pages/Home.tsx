import React from 'react';
import styled from 'styled-components'
import { Container } from '../components/Container';
import { Section1 } from '../components/Section1';
import { TextBox } from '../components/TextBox';
import home1 from '../resources/img/home1.jpg';
import home2 from '../resources/img/home2.jpg';
import home4 from '../resources/img/home4.jpg';
import { device } from '../styles';

const Img = styled.img`
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    width: 80%;
  }
`

export const Home: React.FC = () => {
  return (
    <Container>
      <Section1>
        <TextBox title="Nuestra Historia" quote="Origen">
          <p>La familia Gizon es un negocio textil que lleva en la industria de la moda vasca más de cincuenta años.</p>
          <p>Nuestra tienda es un referente en el estilismo de caballero y joven en Barakaldo que cuenta con las mejores materias primas de fabricación española.</p>
        </TextBox>
        <Img src={home1} />
      </Section1>

      <Section1 reverse>
        <TextBox title="Materiales ecofriendly" quote="Calidad">
          <p>Las prendas producidas para Gizon están elaboradas con los tejidos naturales e innovadores de la mayor alta gama.</p>
          <p>Compartimos una visión sostenible con el medio ambiente y entre nuestras prendas, podrás encontrar pantalones elaborados con originales materias primas como posos de café o fibra de bambú.</p>
        </TextBox>
        <Img src={home2} />
      </Section1>

      <Section1>
        <TextBox title="Atención personalizada" quote="Diseño">
          <p>Nuestra compañía destaca por un personal cualificado y atento que te asesora de manera exclusiva, creando outfits únicos y personalizados.</p>
          <p>Además, ofrecemos a nuestros clientes un servicio de sastrería y arreglos a medida.</p>
        </TextBox>
        <Img src={home4} />
      </Section1>

      {/* <Slider
        play={true}
        cancelOnInteraction={false}
        interval={1000 * 2}
      >
        <div data-src="https://www.dosgalgos.com/images/empresa/Catalogo-DosGalgos-FW19-41.jpg" />
        <div data-src="https://www.dosgalgos.com/images/empresa/Catalogo-DosGalgos-FW19-4.jpg" />
        <div data-src="https://www.dosgalgos.com/images/empresa/Catalogo-DosGalgos-FW19-11.jpg" />
        <div data-src="https://www.carloscordoba.es/wp-content/uploads/2019/11/IMG_2109.jpg" />
      </Slider> */}

    </Container>)
}