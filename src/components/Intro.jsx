import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Header from './Header';
import Form from './Form';

import backImage from '../media/remont_printerov2.jpg';

const SectionStyle = styled.section`
  box-shadow: inset 2px 50px 75px 9px rgba(0, 0, 0, 0.45);
  background-image: url(${backImage});
  display: block;
  background-position: 50% 0%;
  background-size: 100% 100%;
  border-width: 1px;
  width: 100%;
  padding-bottom: 60px;
  z-index: 2;
  background-color: #3245ad;
  left: 0;
  top: 0;
  &::after {
    content: '';
    z-index: 3;
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.65);
    height: inherit;
    width: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
  }
  @media screen and (max-width: 400px) {
    box-shadow: none;
    background-image: none;
  }
`;

const WrapperTitle = styled.div`
  text-align: center;
  z-index: 100;
  color: #fff;
  width: 50%;
  min-width: 450px;

  @media screen and (max-width: 400px) {
    min-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.1em;
  font-weight: 700;
  color: inherit;
  text-transform: uppercase;
  @media screen and (max-width: 400px) {
    font-size: 1.5em;
  }
`;

const IntroText = styled.p`
  margin-top: 40px;
  font-size: 37px;
  font-weight: 400;
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 65px;
  @media screen and (max-width: 400px) {
    margin-top: 0;
  }
`;

const WrapperForm = styled.div`
  z-index: 100;
  text-align: center;
  width: 50%;
  min-width: 300px;

  h2 {
    color: #fff;
  }
  @media screen and (max-width: 400px) {
    min-width: 100%;
  }
`;

const Intro = () => {
  const currentWidth = window.innerWidth;
  return (
    <SectionStyle>
      <Header />
      <Container>
        <WrapperContent>
          <WrapperTitle>
            <Title>
              За 10 минут заправим картридж
              <br />
              для любой модели лазерного принтера
            </Title>
            <div>
              <IntroText>
                Заправляем картриджи
                <br /> в нашем сервисе, или у вас в офисе
              </IntroText>
            </div>
          </WrapperTitle>
          <WrapperForm>
            <h2>Оставить заявку</h2>
            <Form />
          </WrapperForm>
        </WrapperContent>
      </Container>
    </SectionStyle>
  );
};

export default Intro;
