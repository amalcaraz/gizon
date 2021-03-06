import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Nav } from "./Nav";
import { boxPadding, device, headerHeight, headerHeightM } from "../styles";
import { Container } from "./Container";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { Image } from "./Image";

const HeaderContainer = styled.header`
  position: relative;
  z-index: 1;
  box-shadow: 0px 2px 5px #ddd;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: ${headerHeightM}px;

  @media ${device.tablet} {
    height: ${headerHeight}px;
    padding-right: 118px;
  }
`;

const LogoContainer = styled.div`
  height: 70%;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  padding-right: 36px;

  @media ${device.tablet} {
    height: 60%;
    flex: 0 1 auto;
    display: block;
    padding-right: 0;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  height: 100%;

  &::after {
    display: none;
  }
`;

const LogoImg = styled(Image)`
  height: 100%;
`;

const MenuButton = styled.div`
  cursor: pointer;
  display: block;
  margin: 10px;

  @media ${device.tablet} {
    display: none;
  }
`;

const NavItem = styled.a`
  font-size: 1.125rem;
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
  }

  @media ${device.tablet} {
    position: relative;
    margin: 0 17px;

    /* Reset */
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
`;

const NavContainer = styled.nav`
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const NavMobileContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};

  @media ${device.tablet} {
    display: block !important;
  }

  flex: 1 0 100%;

  /* Mobile menu */
  position: absolute;
  top: 102%;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 0 ${boxPadding / 1.4}px 20px;
  box-shadow: 0px 2px 5px #ddd;

  @media ${device.tablet} {
    flex: 1 1 auto;

    /* Mobile menu reset */
    height: auto;
    position: static;
    top: 0;
    left: 0;
    width: auto;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
  }
`;

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClickHandler = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen, setMenuOpen]);

  return (
    <HeaderContainer>
      <Container>
        <InnerContainer>
          <MenuButton onClick={menuClickHandler}>
            <MdMenu size={26} />
          </MenuButton>
          <LogoContainer>
            <LogoLink to="/">
              <LogoImg src="./img/logo.png" alt="Logo de GIZON"></LogoImg>
            </LogoLink>
          </LogoContainer>
          <NavMobileContainer open={menuOpen}>
            <Nav Container={NavContainer} Component={NavItem} />
          </NavMobileContainer>
        </InnerContainer>
      </Container>
    </HeaderContainer>
  );
};
