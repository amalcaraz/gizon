import { ComponentType } from "react";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { RouteProps } from 'react-router-dom';
import { NotFound } from "../pages/NotFound";

export interface Route {
  path: string
  name: string
  nav?: boolean
  exact?: boolean
  component: ComponentType<RouteProps>
}

export const routes: Route[] = [
  { path: '/', name: 'Inicio', exact: true, nav: true, component: Home },
  { path: '/about', name: 'Quienes somos', exact: true, nav: true, component: About },
  { path: '/contact', name: 'Contacto', exact: true, nav: true, component: Contact },
  { path: '*', name: 'Not Found', exact: true, component: NotFound }
]
