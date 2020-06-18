import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BackTop } from 'antd';
import { UpCircleTwoTone } from '@ant-design/icons';

import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Intro from './components/Intro';
import OurServices from './components/OurServices';
import Equipment from './components/Equipment';
import Slogan from './components/Slogan';
import OurAdvantages from './components/OurAdvantages';
import SchemeOfWork from './components/SchemeOfWork';
import Form from './components/Form';
import Header from './components/Header';
import MainMap from './components/Map';
import Reviews from './components/Reviews';

import bg from './media/bg-servisec.jpg';
import bgShadow from './media/bg-shadow.png';

const GlobalStyle = createGlobalStyle`
.wrapper__map {
  background-image: url(./media/bg-servisec.jpg);
  position: relative;
/* 
#main__map {
  opacity: 1;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  }
  .leaflet-marker-icon {
    z-index
  } */
}

.wrapper__map::after {
  content: '';
  position: absolute;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  border-width: 1px;
  background-image: url(./media/bg-shadow.png);
  height: 50px;
  width: 100%;
  top: 0;
  z-index: 1;
  left: 0;
}
`;

const Up = styled.div`
  width: 50px;
  height: 50px;
  background: #1890ff;
  border-radius: 50%;
  border: 1px solid #eee;
`;

const WrapperForm = styled.div`
  background: url(${bg});
  padding: 60px 0;
  position: relative;

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
`;

const App = () => {
  return (
    <>
      <Intro />
      <OurServices />
      <Equipment />
      <OurAdvantages />
      <Slogan />
      <SchemeOfWork />
      <Reviews />
      <WrapperForm>
        <Form width />
      </WrapperForm>
      <BackTop>
        <UpCircleTwoTone style={{ fontSize: '45px' }} />
      </BackTop>
    </>
  );
};

export default App;
