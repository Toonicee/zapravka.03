import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Container from './Container';
import { Title } from './style/style';

import backImage from '../media/bg-servisec.jpg';
import zapravka from '../media/zapravka.jpg';
import vostanovlenie from '../media/vastanovlenie.png';
import proshivka from '../media/PROShIVKA.jpg';
import remont from '../media/remont.jpg';
import rashodnie from '../media/rashodnie.jpg';
import newItem from '../media/new.jpg';

import bgShadow from '../media/bg-shadow.png';

const SectionStyle = styled.section`
  background-color: #001c82;
  position: relative;
  padding-bottom: 50px;
  background-image: url(${backImage});

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

  .slick-slider {
    width: 100%;
  }

  .carousel__img {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
  }
`;

const Item = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  h3 {
    margin-bottom: 25px;
    font-size: 15px;
    text-transform: uppercase;
  }

  .item__img {
    border-radius: 15px;
    width: 350px;
    height: 350px;
  }

  @media screen and (max-width: 400px) {
    h3 {
      text-align: center;
    }
    .item__img {
      width: 100%;
      height: 350px;
    }
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const SliderItems = [
  { srcImg: zapravka, alt: 'заправка картриджей', title: 'Заправка картриджей', width: '400' },
  {
    srcImg: vostanovlenie,
    alt: 'востановление картриджа',
    title: 'Востановление картриджей',
    width: '400',
  },
  { srcImg: proshivka, alt: 'прошивка', title: 'Прошивка чипов и принтеров', width: '400' },
  { srcImg: remont, alt: 'ремонт', title: 'Ремонт принтеров', width: '400' },
  { srcImg: rashodnie, alt: 'расходные материалы', title: 'Расходные материалы', width: '400' },
  { srcImg: newItem, alt: 'новые картриджы', title: 'Продажа картриджей', width: '400' },
];

const OurServices = () => {
  const currentWidth = window.innerWidth;
  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
  };
  return (
    <SectionStyle>
      <Container>
        <Title>Сервисный центр предлагает</Title>
        <div className="wrapper">
          {currentWidth >= 400 ? (
            <List>
              {SliderItems.map(({ srcImg, alt, title, width }) => (
                <Item>
                  <h3>{title}</h3>
                  <div>
                    <img className="item__img" src={srcImg} alt={alt} width={width} />
                  </div>
                </Item>
              ))}
            </List>
          ) : (
            <List>
              <Slider {...settings}>
                {SliderItems.map(({ srcImg, alt, title, width }) => (
                  <Item>
                    <h3>{title}</h3>
                    <div>
                      <img className="item__img" src={srcImg} alt={alt} width={width} />
                    </div>
                  </Item>
                ))}
              </Slider>
            </List>
          )}
        </div>
      </Container>
    </SectionStyle>
  );
};

export default OurServices;
