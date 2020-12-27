import { ComponentType } from "react";
import { Home } from "../pages/Home";
import { RouteProps } from 'react-router-dom';

export interface Route {
  path: string
  name: string
  nav?: boolean
  exact?: boolean
  component: ComponentType<RouteProps>
}

export const routes: Route[] = [
  { path: '/', name: 'Home', exact: true, nav: true, component: Home },
  { path: '/about', name: 'About', exact: true, nav: true, component: Home },
  { path: '/contact', name: 'Contact', exact: true, nav: true, component: Home },
  { path: '*', name: 'Not Found', exact: true, component: Home }
]
