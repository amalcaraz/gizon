import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { MenuIcon } from './common/MenuIcon';
import { Nav } from './Nav';
import logo from '../resources/img/logo.png';
import { boxPadding, device, headerHeight, headerHeightM } from '../styles';
import { Container } from './Container';
import { MdMenu } from "react-icons/md";

const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 5px #ddd;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: ${headerHeightM}px;
  
  @media ${device.tablet} {
    height: ${headerHeight}px;
    padding-right: 110px;
  }
`

const LogoContainer = styled.div`
  height: 70%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;

  @media ${device.tablet} {
    height: 55%;
    flex: 0 1 auto;
    display: block;
  }
`

const LogoLink = styled.a`
  display: block;
  height: 100%;
  
  &::after {
    display: none;
  }
`

const LogoImg = styled.img`
  height: 100%;
`

const MenuButton = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;  
  display: block;
  margin: 10px;

  @media ${device.tablet} {
    display: none;
  }
`

const NavItem = styled.a`
  font-size: 1.125rem; // 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.3px;
  text-transform: capitalize;

  display: block;
  width: 100%;
  padding: 20px;


  &::after {
    display: none;
  }

  &.active {
    background-color: rgba(0, 0, 0, 0.05);
    // font-weight: 600; 
  }

  @media ${device.tablet} {
    position: relative;
    margin: 0 17px;

    // Reset
    display: inline;
    width: auto;
    padding: 0;

    &::after {
      display: inherit;
    }

    &.active {
      background-color: transparent;
    }
  }
    
`

const NavContainer = styled.nav`
  @media ${device.tablet} {
    display: flex; 
    justify-content: center;
  }
`

const NavMobileContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => open ? 'block' : 'none'};

  @media ${device.tablet} {
    display: block !important;
  }

  flex: 1 0 100%;
  
  // Mobile menu
  position: absolute;
  top: 102%;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 0 ${boxPadding / 1.4}px 20px;
  box-shadow: 0px 2px 5px #ddd;

  @media ${device.tablet} {
    flex: 1 1 auto;

    // Mobile menu reset
    height: auto;
    position: static;
    top: 0;
    left: 0;
    width: auto;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }
`

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuClickHandler = useCallback(() => {
    setMenuOpen(!menuOpen)
  }, [menuOpen, setMenuOpen])

  return (
    <HeaderContainer>
      <Container>
        <InnerContainer>
          <MenuButton onClick={menuClickHandler}>
            <MdMenu size={26} />
          </MenuButton>
          <LogoContainer>
            <LogoLink href="/">
              <LogoImg src={logo}></LogoImg>
            </LogoLink>
          </LogoContainer>
          <NavMobileContainer open={menuOpen}>
            <Nav Container={NavContainer} Component={NavItem} />
          </NavMobileContainer>
        </InnerContainer>
      </Container>
    </HeaderContainer>
  )
}