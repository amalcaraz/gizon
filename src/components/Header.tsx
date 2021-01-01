import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from './common/MenuIcon';
import { Nav } from './Nav';
import logo from '../resources/img/logo.png';
import { headerHeight } from '../styles';
import { Container } from './Container';

const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 5px #ddd;
`

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight}px;
  // padding: 0 45px;
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
      <Container>
        <InnerContainer>
          <Logo src={logo}></Logo>
          <Nav component={ItemContainer} />
          <MenuButtonContainer>
            <MenuIcon />
          </MenuButtonContainer>
        </InnerContainer>
      </Container>
    </HeaderContainer>
  )
}