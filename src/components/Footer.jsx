import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Logo from './Logo';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  .address {
    color: #fcf808;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .wrapper__address {
    z-index: 100;
  }
  @media screen and (max-width: 400px) {
    padding-top: 20px;
    justify-content: center;
    text-align: center;
  }
`;

const Information = styled.div`
  z-index: 100;

  .mail {
    font-size: 16px;
    color: #fcf808;
    font-weight: 300;
  }
  .phone {
    font-size: 18px;
    font-weight: 300;
    display: flex;
    color: #fcf808;
    flex-direction: column;
    a {
      color: #fcf808;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <div className="wrapper__address">
          <address className="address">670031, г. Улан-Удэ, ул. Бабушкина, 9а</address>
          <address className="address">
            670045, г. Улан-Удэ, ул. Автомобилистов проспект, 5/2, 3-й павильон
          </address>
        </div>
        <Information>
          <div>
            <div className="phone">
              <span>Появились вопросы?</span>
              <a href="tel:+73012456457">8 (3012) 456-457</a>
            </div>
            <a className="mail" href="mailto:rezonuu@mail.ru">
              edelweis214777@mail.ru
            </a>
          </div>
        </Information>
      </Wrapper>
    </Container>
  );
};

export default Footer;
