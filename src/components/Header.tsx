import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from './common/MenuIcon';
import { Nav } from './Nav';
import logo from '../resources/img/logo.png';
import { headerHeight } from '../styles';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight}px;
  padding: 0 45px;
`

const Logo = styled.img`
  height: 60%;
`

const MenuButtonContainer = styled.div`
  width: 27px;
  height: 27px;
  cursor: pointer;
`

const ItemContainer = styled.a`
  position: relative;
  font-size: 1.125rem; // 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  height: 102px;
  margin: 0 17px;
`

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logo}></Logo>
      <Nav component={ItemContainer} />
      <MenuButtonContainer>
        <MenuIcon />
      </MenuButtonContainer>
    </HeaderContainer>
  )
}