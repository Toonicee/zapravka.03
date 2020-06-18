import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Container from './Container';

import laser from '../media/lazernie.png';
import kopir from '../media/kopiri.png';
import mfy from '../media/mfy.jpg';

import hp from '../media/hp.svg';
import samsung from '../media/samsung.svg';
import canon from '../media/canon.svg';
import kyocera from '../media/kyocera.svg';
import xerox from '../media/xerox.svg';
import brother from '../media/brother.svg';
import oki from '../media/oki.svg';

import bgShadow from '../media/bg-shadow.png';
import bg from '../media/bg-servisec.jpg';

import { Title } from './style/style';

const SectionStyle = styled.section`
  position: relative;
  background-image: url(${bg});
  padding-bottom: 50px;

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

  @media screen and (max-width: 1100px) {
    .slick-slider {
      width: 100%;

      img {
        margin: 0 auto;
      }
    }
  }
`;

const List = styled.ul`
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  justify-content: space-around;
  text-align: center;
  &:nth-child(2) {
    margin-top: 80px;
  }

  @media screen and (max-width: 1100px) {
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;

  @media screen and (max-width: 400px) {
    justify-content: center;
  }
`;

const TitleItem = styled.span`
  margin-bottom: 30px;
  font-size: 17px;
  text-transform: uppercase;
`;

const brandList = [
  { imgSrs: hp, alt: 'логотип hp', width: '70' },
  { imgSrs: samsung, alt: 'логотип samsung', width: '150' },
  { imgSrs: canon, alt: 'логотип canon', width: '150' },
  { imgSrs: kyocera, alt: 'логотип kyocera', width: '150' },
  { imgSrs: xerox, alt: 'логотип xerox', width: '150' },
  { imgSrs: brother, alt: 'логотип brother', width: '150' },
  { imgSrs: oki, alt: 'логотип oki', width: '150' },
];

const eduipmentList = [
  { imgSrs: laser, alt: 'Лазерный принтер', width: '200', text: 'Лазерные принтеры' },
  { imgSrs: kopir, alt: 'Копиры', width: '200', text: 'Копир' },
  { imgSrs: mfy, alt: 'Лазерные МФУ', width: '200', text: 'Лазерный МФУ' },
];

const Equipment = () => {
  const currentWidth = window.innerWidth;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: currentWidth <= 400 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: currentWidth <= 400 ? 1000 : 2000,
    autoplaySpeed: 1500,
    cssEase: 'linear',
  };
  return (
    <SectionStyle>
      <Container>
        <Title>С какой техникой мы работаем</Title>
        <div>
          <List>
            {eduipmentList.map(({ imgSrs, alt, width, text }) => (
              <ListItem>
                <TitleItem>{text}</TitleItem>
                <div>
                  <img src={imgSrs} width={width} alt={alt} />
                </div>
              </ListItem>
            ))}
          </List>
          <List>
            {currentWidth <= 1100 ? (
              <Slider {...settings}>
                {brandList.map(({ imgSrs, alt, width }) => (
                  <li>
                    <img src={imgSrs} width={width} alt={alt} />
                  </li>
                ))}
              </Slider>
            ) : (
              brandList.map(({ imgSrs, alt, width }) => (
                <li>
                  <img src={imgSrs} width={width} alt={alt} />
                </li>
              ))
            )}
          </List>
        </div>
      </Container>
    </SectionStyle>
  );
};

export default Equipment;
