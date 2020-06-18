import React from 'react';
import styled from 'styled-components';

import Container from './Container';

import bg from '../media/fon1_sFEsAda.jpg';
import bgShadow from '../media/bg-shadow.png';

const Wrapper = styled.div`
  background: url(${bg});
  text-align: center;
  padding: 45px 0;
  position: relative;
  background-size: 100% 100%;
  &::after {
    content: '';
    position: absolute;
    background-position: 50% 0%;
    background-repeat: no-repeat;
    border-width: 1px;
    background-image: url(${bgShadow});
    height: 50px;
    width: 100%;
    top: 0;
    z-index: 1;
    left: 0;
  }

  .text {
    font-size: 21px;
    font-weight: 400;
    max-width: 600px;
    color: #fff;
    width: 100%;
    margin: 0 auto;
  }
`;

const Slogan = () => {
  return (
    <Wrapper>
      <Container>
        <p className="text">
          Мы осуществляем заправку картриджей по абсолютно отлаженной технологии и с соблюдением
          всех необходимых требований, поэтому смело можем гарантировать вам высокое качество
          проводимых нами работ.
        </p>
      </Container>
    </Wrapper>
  );
};

export default Slogan;
