import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';
import Slider from 'react-slick';
import Container from './Container';
import { Title } from './style/style';

import backImage from '../media/bg-servisec.jpg';
import bgShadow from '../media/bg-shadow.png';

const arrReviews = [
  {
    author: 'Александр Елсуков',
    srcImg: '',
    body: 'Отличный партнер! Расходных материалов достаточное количество, заказ собирается быстро.',
    date: '4 марта 2020',
    rate: 5,
  },
  {
    author: 'Андрей Владимирович',
    srcImg: 'https://i6.photo.2gis.com/images/profile/844424964777933_3810_64x64.jpg',
    body: 'Отличная компания. С адекватными ценами за работу.',
    date: '13 января 2020',
    rate: 4.8,
  },
  {
    author: 'Эржена Раднаева',
    srcImg: '',
    body:
      'Большое спасибо за картридж! Думала картридж не спасти и надо новый покупать, в другой организации наговорили всякого, ценник задрали. А здесь все посмотрели, хорошо проконсультировали и сделали работу на отлично. И цены приятные.',
    date: '12 сентября 2019',
    rate: 5,
  },
  {
    author: '​Julia Sakharovskaya',
    srcImg: '',
    body:
      'Спасибо! Приехали, заправили, проконсультировали! Не надо никуда ехать, возить! Молодцы😀👍',
    date: '18 апреля 2019',
    rate: 5,
  },
  {
    author: '​Eskad Enset',
    srcImg: 'https://i3.photo.2gis.com/images/profile/844424975404223_bf72_64x64.jpg',
    body:
      'Тоже давно заправляемся. Сотрудник очень аккуратно выполняет свою работу (вызываем в магазин). Быстро, качественно и недорого. 👍',
    date: '25 марта 2019',
    rate: 5,
  },
  {
    author: 'Вячеслав Выходцев',
    srcImg: 'https://i2.photo.2gis.com/images/profile/844424969478192_33e5_64x64.jpg',
    body: 'Обслуживание нравится и за технику не переживаем(когда отдаём в ремонт). Рекомендую.',
    date: '20 марта 2019',
    rate: 4.5,
  },
  {
    author: 'Simo Hayha',
    srcImg: '',
    body: 'Хорошие консультанты, все сделали быстро.',
    date: '31 октября 2019',
    rate: 5,
  },
];

const SectionStyle = styled.section`
  padding: 25px 0 90px 0;
  background-image: url(${backImage});
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

const WrapperSlider = styled.div`
  display: flex;
  justify-content: center;
  .slick-slider {
    max-width: 850px;
    width: 100%;
    padding: 25px;

    .slick-prev:before,
    .slick-next:before {
      color: #3f51b5;
    }
  }

  @media screen and (max-width: 400px) {
    .slick-slider {
      width: 100%;
      padding: 5px;
    }
  }
`;

const AvatarDeafault = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: ${props => props.randomColor};

  span {
    color: #3f51b5;
  }

  @media screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 5px;
    left: 0;
  }
`;

const SlideItem = styled.div`
  display: flex !important;
  position: relative;

  .author__img {
    border-radius: 50%;
    width: 80px;
    max-height: 128px;
  }

  .inner {
    width: 100%;
    margin-left: 25px;
    p {
      font-size: 20px;
    }
  }
  .author {
    display: inline-block;
    margin-bottom: 20px;
    font-size: 24px;
    color: #3f51b5;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;

    .author__img {
      width: 50px;
      position: absolute;
      top: 5px;
      left: 0;
    }

    .inner {
      margin-left: 0;
      p {
        margin-top: 10px;
        font-size: 16px;
      }
    }

    .author {
      font-size: 20px;
      text-align: center;
      width: 100%;
      margin-top: 10px;
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Reviews = () => {
  const currentWidth = window.innerWidth;
  const settings = {
    dots: true,
    infinite: true,
    arrows: currentWidth >= 400,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
  };
  return (
    <SectionStyle>
      <Container>
        <Title>Отзывы наших клиентов</Title>
        <WrapperSlider>
          <Slider {...settings}>
            {arrReviews.map(({ author, srcImg, body, date, rate }) => {
              const randomColor = `#${`${Math.random().toString(16)}000000`
                .substring(2, 8)
                .toUpperCase()}`;
              return (
                <SlideItem key={author}>
                  <div>
                    {srcImg ? (
                      <img className="author__img" src={srcImg} alt={author} />
                    ) : (
                      <AvatarDeafault randomColor={randomColor}>
                        <span>AA</span>
                      </AvatarDeafault>
                    )}
                  </div>
                  <div className="inner">
                    <span className="author">{author}</span>
                    <p>{body}</p>
                    <BottomRow>
                      <span>{date}</span>
                      <Rate defaultValue={rate} />
                    </BottomRow>
                  </div>
                </SlideItem>
              );
            })}
          </Slider>
        </WrapperSlider>
      </Container>
    </SectionStyle>
  );
};

export default Reviews;
