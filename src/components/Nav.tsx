import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { NavLink, RouteProps } from 'react-router-dom';
import { routes } from '../core/routes';

const DefaultNavContainer = styled.nav``
const DefaultItemContainer: ComponentType = styled.a``

export interface NavProps {
  Container?: ComponentType
  Component?: ComponentType<RouteProps>
}

export const Nav: React.FC<NavProps> = ({ Container = DefaultNavContainer, Component = DefaultItemContainer }) => {
  return (
    <Container>
      {routes.filter(({ nav }) => !!nav).map(({ path, name, exact }) => (
        <NavLink key={name} to={path} exact={exact} component={Component} activeClassName="active">{name}</NavLink>
      ))}
    </Container>)
}
