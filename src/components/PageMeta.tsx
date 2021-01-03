import React from "react"
import { Helmet } from "react-helmet"
import { RouteId, routesIndex } from "../core/routes"

export interface PageMetaProps {
  id: RouteId
}

export const PageMeta: React.FC<PageMetaProps> = ({ id }) => {
  const {title, desc} = routesIndex[id]

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  )
}