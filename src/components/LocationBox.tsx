import styled from "styled-components"
import { MdLocationOn, MdEmail, MdPhone, MdSchedule } from "react-icons/md";
import { boxPadding } from "../styles";

const Container = styled.div`
  padding: ${boxPadding}px;
`

const Title = styled.h3`
  font-size: 24px;
  letter-spacing: .15px;
  text-transform: uppercase;
  font-style: normal;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: .7rem;
`

const Link = styled.a`
  && {
    font-family: Raleway, sans-serif;
    color: #777;
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    font-weight: 400;
    display:flex;
    align-items: center;
    margin: .2rem 0;

    &:hover::after {
      display: none;
    }
  }
`

const Icon = styled.span`
  line-height: 0;
  color: #9a9a9a;
  margin-right: .5rem;
`

const iconColor = '9a9a9a'

export interface LocationBoxProps {
}

export const LocationBox: React.FC<LocationBoxProps> = () => {
  return (
    <Container>
      <Title>Encuentranos en</Title>
      <ul>
        <li><Link target="_blank" href="https://www.google.com/maps/place/Gizon/@43.2956533,-2.9870485,15z/data=!4m5!3m4!1s0x0:0x11b8afcf231e650d!8m2!3d43.2956533!4d-2.9870485"><Icon><MdLocationOn color={iconColor} /></Icon>Nafarroa Kalea, 14, 48901 Barakaldo, Bizkaia</Link></li>
        <li><Link><Icon><MdSchedule color={iconColor} /></Icon>Lun - Vie: 10:00 - 13:30 / 17:00 - 20:00</Link></li>
        <li><Link target="_blank" href="tel:+34944377790"><Icon><MdPhone color={iconColor} /></Icon>+34 944 37 77 90</Link></li>
        <li><Link target="_blank" href="mailto:pau.gizon@gmail.com"><Icon><MdEmail color={iconColor} /></Icon>pau.gizon@gmail.com</Link></li>
      </ul>
    </Container>
  )
}