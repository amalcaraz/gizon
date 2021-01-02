import React from 'react';
import { Container } from '../components/Container';
import { TextBox } from '../components/TextBox';

export const NotFound: React.FC = () => {
  return (
    <Container>
      <TextBox title="Página no encontrada" quote="404">
        <p>La url solicitada no está disponible o no coincide con ninguna página en nuestra web</p>
      </TextBox>
    </Container>
  )
}