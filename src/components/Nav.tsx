import React, { ComponentType } from 'react';
import styled from 'styled-components';
import { NavLink, RouteProps } from 'react-router-dom';
import { routes } from '../core/routes';
import { device } from '../styles';

const NavContainer = styled.nav`
  display: flex;

  @media ${device.laptop} { 
    padding-right: 80px;
  }
`

const DefaultItemContainer: ComponentType = styled.a``

export const Nav: React.FC<{
  component: ComponentType<RouteProps>
}> = ({ component = DefaultItemContainer }) => {
  return (
    <NavContainer>
      <ul>
        {routes.filter(({ nav }) => !!nav).map(({ path, name, exact }) => (
          <NavLink to={path} exact={exact} component={component} activeClassName="active">{name}</NavLink>
        ))}
      </ul>
    </NavContainer>)
}
