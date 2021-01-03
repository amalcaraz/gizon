import { ComponentType } from "react";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { RouteProps } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Cookies } from "../pages/Cookies";

export enum RouteId {
  HOME = 'home',
  ABOUT = 'about',
  CONTACT = 'contact',
  COOKIES = 'cookies',
  NOT_FOUND = 'not_found',
}

export interface Route {
  id: RouteId
  title: string
  desc: string
  path: string
  name: string
  nav?: boolean
  exact?: boolean
  component: ComponentType<RouteProps>
}

export const routesIndex: Record<RouteId, Route> = {
  [RouteId.HOME]: {
    id: RouteId.HOME,
    title: "GIZON Moda | Nueva Colección Invierno Hombre",
    desc: 'Descubre la nueva colección otoño - invierno 2020 de GIZON online. Las últimas tendencias en ropa de hombre, caballero y joven disponible también en nuestra tienda de Barakaldo.',
    path: "/",
    name: "Inicio",
    nav: true,
    exact: true,
    component: Home
  },
  [RouteId.ABOUT]: {
    id: RouteId.ABOUT,
    title: "Conoce nuestra historia | GIZON Moda",
    desc: 'GIZON lleva más de cincuenta años en la industria de la moda vasca. Visita nuestra tienda en Barakaldo, déjate asesorar por nuestro equipo de manera personalizada.',
    path: "/about",
    name: "Quienes somos",
    nav: true,
    exact: true,
    component: About,
  },
  [RouteId.CONTACT]: {
    id: RouteId.CONTACT,
    title: 'Contacta con nosotros | GIZON Moda',
    desc: '¿Tienes alguna pregunta o necesitas ayuda? Encuentra nuestros datos de contacto, dirección, email, teléfono y horarios de apertura en los siguientes enlaces.',
    path: "/contact",
    name: "Contacto",
    nav: true,
    exact: true,
    component: Contact,
  },
  [RouteId.COOKIES]: {
    id: RouteId.COOKIES,
    title: 'Política de cookies | GIZON Moda',
    desc: 'Nuestra política de cookies.',
    path: "/cookies",
    name: "Política de cookies",
    nav: false,
    exact: true,
    component: Cookies,
  },
  [RouteId.NOT_FOUND]: {
    id: RouteId.NOT_FOUND,
    title: '404 - Not Found | GIZON Moda',
    desc: 'Ha habido un problema al obtener la página solicitada.',
    path: "*",
    name: "Not Found",
    nav: false,
    exact: true,
    component: NotFound
  }
}

export const routes = Object.values(routesIndex)
