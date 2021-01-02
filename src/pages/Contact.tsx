import React from 'react';
import styled from 'styled-components'
import { ContactBox } from '../components/ContactBox';

const Map = styled.iframe`
  position: relative;
  border: 0;
  width: 100%;
  height: 500px;
`

const ContactWrap = styled.div`
  display: flex;
  justify-content: center;
`

// geo:43.29566,-2.98706?z=19
// https://goo.gl/maps/qH8MU8w8m1psrVns8
// <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.891540290555!2d-2.9892781842568117!3d43.295592979135066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a7a0368b471%3A0x11b8afcf231e650d!2sGizon!5e0!3m2!1ses!2ses!4v1609540656970!5m2!1ses!2ses" width="600" height="450" frameBorder="0" allowFullScreen={false} aria-hidden="false" tabIndex={0}></Map>
// <Map src="https://www.openstreetmap.org/export/embed.html?bbox=-2.9885065555572514%2C43.29486166181988%2C-2.9856097698211674%2C43.296468304168535&amp;layer=hot&amp;marker=43.29566498830028%2C-2.987058162689209"></Map>
// <a href="https://www.openstreetmap.org/?mlat=43.29566&amp;mlon=-2.98706#map=19/43.29566/-2.98706&amp;layers=H">Ver mapa más grande</a>

export const Contact: React.FC = () => {
  return (
    <>
      <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.891540290555!2d-2.9892781842568117!3d43.295592979135066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a7a0368b471%3A0x11b8afcf231e650d!2sGizon!5e0!3m2!1ses!2ses!4v1609540656970!5m2!1ses!2ses" width="600" height="450" frameBorder="0" allowFullScreen={false} aria-hidden="false" tabIndex={0}></Map>
      <ContactWrap>
        <ContactBox />
      </ContactWrap>
    </>
  )
}

