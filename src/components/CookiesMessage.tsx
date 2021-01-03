import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const textColor = '#444'

const TextCss = css`
  font-family: roboto, sans-serif;
  font-weight: 400;
  color: ${textColor} !important;
`

const Wrap = styled.div`
  & .CookieConsent {
    ${TextCss}
    box-shadow: 0px -1px 5px #ddd;
    align-items: center !important;
    font-size: 16px !important;
    
    & > div:first-child {
      width: 80%;
    }
  }

  & #rcc-decline-button, & #rcc-confirm-button {
    transition: background-color .25s 0s ease-out;
    background-color: #000 !important;
    color: #fff !important;
    padding: 15px 20px !important;
    font-size: 16px !important;
  }
  
  & #rcc-decline-button:hover {
    background-color: rgba(160, 0, 0) !important;
  }

  & #rcc-confirm-button:hover {
    background-color: rgba(0, 160, 0) !important;
  }
`

const Link2 = styled(Link)`
  && {
    ${TextCss}
    
    display: inline-block;

    &::after {
      background-color: ${textColor} !important;
      opacity: 1 !important;
    }
  }
`

export const CookiesMessage: React.FC = () => {
  return (
    <Wrap>
      <CookieConsent
        location="bottom"
        buttonText="Aceptar cookies"
        cookieName="gizon_cookies"
        style={{ background: "#fff" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        enableDeclineButton
        declineButtonText="Rechazar cookies"
        hideOnAccept={true}
        // eslint-disable-next-line no-restricted-globals
        onDecline={() => location.href = 'https://www.google.com/'}
      >
        Utilizamos cookies de terceros con finalidades analíticas.
        Puedes aceptar todas las cookies pulsando el botón “Aceptar todas las cookies”. <br />
      Para más información puedes visitar nuestra <Link2 to="/cookies">Política de cookies</Link2>
      </CookieConsent>
    </Wrap>
  )
}
