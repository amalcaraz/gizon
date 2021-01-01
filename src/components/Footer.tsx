import React from 'react';
import styled from 'styled-components'
import { Container } from './Container';

const FooterContainer = styled.footer`
  background-color: #080808;
  padding-top: 97px;
  padding-bottom: 59px;

  && li {
    line-height: 22px;
    padding: 0 0 10px;
  }

  && a {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #fff;

    &:after {
      background-color: #fff;
    }
  }

`

const FooterGrid = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  && li {
    line-height: 22px;
    padding: 0 0 10px;
  }

  && a {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #fff;

    &:after {
      background-color: #fff;
    }
  }
`

const FooterCol = styled.div``

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
          <FooterCol>
            <ColumnTitle>Title 1</ColumnTitle>
            <ul>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
            </ul>
          </FooterCol>
          <FooterCol>
            <ColumnTitle>Social</ColumnTitle>
            <ul>
              <li><a href="https://www.instagram.com/gizon_moda_hombre/" target="_blank">Instagram</a></li>
              <li><a href="https://www.facebook.com/GizonModaHombre" target="_blank">Facebook</a></li>
            </ul>
          </FooterCol>
          <FooterCol>
            <ColumnTitle>Title 2</ColumnTitle>
            <ul>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
            </ul>
          </FooterCol>
          <FooterCol>
            <ColumnTitle>Title 3</ColumnTitle>
            <ul>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
              <li><a href="">Lorem ipsum</a></li>
            </ul>
          </FooterCol>
        </FooterGrid>
      </Container>
    </FooterContainer>)
}