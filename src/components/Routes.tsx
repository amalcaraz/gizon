import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { routes } from "../core/routes";

export const Routes: React.FC = () => {
  let location = useLocation()

  console.log('GAGA => ', location)
  useEffect(() => {
    gtag('event', 'page_view')
  }, [location]);

  return (
    <Switch>
      {routes.map(({ id, path, exact, component }) => (
        <Route key={id} path={path} exact={exact}>
          {component}
        </Route>
      ))}
    </Switch>
  )
}
