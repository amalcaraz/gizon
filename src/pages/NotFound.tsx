import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Container } from "../components/Container";
import { TextBox } from "../components/TextBox"

const Container404 = styled(Container)`
  min-height: 800px;
`

export const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Not Found | GIZON Moda</title>
        <meta name="description" content="Ha habido un problema al obtener la página solicitada" />
      </Helmet>
      <Container404>
        <TextBox title="Página no encontrada" quote="404">
          <p>
            La url solicitada no está disponible o no coincide con ninguna página
            en nuestra web
        </p>
        </TextBox>
      </Container404>
    </>
  );
};
