import styled, { css } from "styled-components";
import { MdLocationOn, MdEmail, MdPhone, MdSchedule } from "react-icons/md";
import { boxPadding } from "../styles";

const Container = styled.div`
  padding: ${boxPadding}px;
`;

const Title = styled.h3`
  font-size: 24px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  font-style: normal;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: 0.7rem;
`;

const ItemCss = css`
  font-family: Raleway, sans-serif;
  color: #777;
  line-height: 24px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;

  &:hover::after {
    display: none;
  }
`;

const Link = styled.a`
  && {
    ${ItemCss}
  }
`;

const Link2 = styled.span`
  && {
    ${ItemCss}
  }
`;

const Icon = styled.span`
  line-height: 0;
  color: #9a9a9a;
  margin-right: 0.5rem;
`;

export interface ContactBoxProps {}

export const ContactBox: React.FC<ContactBoxProps> = () => {
  return (
    <Container>
      <Title>Encuentranos en</Title>
      <ContactList />
    </Container>
  );
};

export const ContactList: React.FC = () => {
  return (
    <ul>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Gizon/@43.2956533,-2.9870485,15z/data=!4m5!3m4!1s0x0:0x11b8afcf231e650d!8m2!3d43.2956533!4d-2.9870485"
        >
          <Icon>
            <MdLocationOn />
          </Icon>
          Nafarroa Kalea, 14, 48901 Barakaldo, Bizkaia
        </Link>
      </li>
      <li>
        <Link2>
          <Icon>
            <MdSchedule />
          </Icon>
          Lun - Vie: 10:00 - 13:30 / 17:00 - 20:00
        </Link2>
      </li>
      <li>
        <Link target="_blank" rel="noreferrer" href="tel:+34944377790">
          <Icon>
            <MdPhone />
          </Icon>
          +34 944 37 77 90
        </Link>
      </li>
      <li>
        <Link
          target="_blank"
          rel="noreferrer"
          href="mailto:pau.gizon@gmail.com"
        >
          <Icon>
            <MdEmail />
          </Icon>
          pau.gizon@gmail.com
        </Link>
      </li>
    </ul>
  );
};
