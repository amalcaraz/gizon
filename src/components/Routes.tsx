import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../core/routes";

export const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map(({ name, path, exact, component }) => (
        <Route key={name} path={path} exact={exact}>
          {component}
        </Route>
      ))}
    </Switch>
  );
};
