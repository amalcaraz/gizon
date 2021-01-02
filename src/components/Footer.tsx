import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { routes } from '../core/routes';
import { ContactList } from './ContactBox';
import { Container } from './Container';
import logo2 from '../resources/img/logo2.png';
import { device } from '../styles';

const LogoImg = styled.img`
  height: 80px;
  margin-left: -10px;

  @media ${device.tablet} {
    height: 100px;
  }
`

const FooterContainer = styled.footer`
  background-color: #080808;
  padding: 20px 0;

  @media ${device.tablet} {
    padding-top: 97px;
    padding-bottom: 59px;
  }
`

const FooterGrid = styled.nav`
  display: grid;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(2, 30%) 40%;
    grid-template-rows: repeat(1, 1fr);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 22%) 32%;
    grid-template-rows: repeat(1, 1fr);
  }

  & li {
    padding-bottom: 10px;
    line-height: 22px;
  }

  && a {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: #ddd;

    &.active::after {
      opacity: 0;
    }

    &:hover::after {
      opacity: 1;
      background-color: #fff;
    } 
  }
`

const FooterCol = styled.div`
  margin: 20px 0;

  @media ${device.tablet} {
    margin: 0;
  }

  &:last-child li {
    padding-bottom: 2px;
  }
`

const LogoFooterCol = styled(FooterCol)`
  @media ${device.laptop} {
    display: none;
  }

  @media ${device.laptopL} {
    display: block;
  }
`

const ColumnTitle = styled.h5`
  font-family: "Crimson Text", sans-serif;
  font-size: 24px;
  letter-spacing: 0.15px;
  line-height: 39px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;
  font-style: normal;
  margin-bottom: 7px;
`

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterGrid>
          <LogoFooterCol>
            <LogoImg src={logo2}></LogoImg>
          </LogoFooterCol>
          <FooterCol>
            <ColumnTitle>Gizon Moda</ColumnTitle>
            {routes.filter(({ nav }) => !!nav).map(({ path, name, exact }) => (
              <ul>
                <li><NavLink to={path}>{name}</NavLink></li>
              </ul>
            ))}
          </FooterCol>
          <FooterCol>
            <ColumnTitle>Síguenos</ColumnTitle>
            <ul>
              <li><a href="https://www.instagram.com/gizon_moda_hombre/" target="_blank">Instagram</a></li>
              <li><a href="https://www.facebook.com/GizonModaHombre" target="_blank">Facebook</a></li>
            </ul>
          </FooterCol>
          <FooterCol>
            <ColumnTitle>Conócenos</ColumnTitle>
            <ContactList />
          </FooterCol>
        </FooterGrid>
      </Container>
    </FooterContainer>)
}