import React from "react"
import styled from "styled-components"
import { Container } from "../components/Container"
import { PageMeta } from "../components/PageMeta"
import { TextBox } from "../components/TextBox"
import { RouteId } from "../core/routes"

const Container404 = styled(Container)`
  min-height: 800px;
`

export const NotFound: React.FC = () => {
  return (
    <>
      <PageMeta id={RouteId.NOT_FOUND} />
      <Container404>
        <TextBox title="Página no encontrada" quote="404">
          <p>
            La url solicitada no está disponible o no coincide con ninguna página
            en nuestra web
        </p>
        </TextBox>
      </Container404>
    </>
  )
}
