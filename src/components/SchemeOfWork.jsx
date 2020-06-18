import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import { Title } from './style/style';

import phone from '../media/1_OUkM3ce.png';
import mess from '../media/2_NfIKQG0.png';
import bus from '../media/3_jPwRPlL.png';
import gasStation from '../media/4_yuAoZHr.png';
import check from '../media/5_wHbdzt6.png';
import payment from '../media/6_HmJg0RC.png';
import okey from '../media/7_q8gSF2o.png';

import arrow from '../media/arrow_CbJ3dao.png';
import backImage from '../media/bg-servisec.jpg';
import bgShadow from '../media/bg-shadow.png';

const SectionStyle = styled.section`
  padding-bottom: 50px;
  background: rgba(0, 37, 245, 0.8);
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

const Circle = styled.div`
  border-color: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 104px;
  height: 104px;
  z-index: 124;
  background-color: #39b54a;
  border-radius: 50%;
`;

const List = styled.ul`
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  flex-wrap: wrap;

  .text {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    align-items: center;

    .text {
      margin-top: 20px;
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  transform: scale(0);
  &:not(:last-child)&::before {
    content: '';
    position: absolute;
    right: 0;
    top: 35px;
    width: 20px;
    height: 35px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
  }

  &.active {
    /* transform: scale(1); */
    transform: scale(1);
    transition: ${props => `${props.animateTime}s`};
  }

  @media screen and (max-width: 400px) {
    margin-bottom: 80px;
    width: 100%;
    &:nth-child(2n) {
      padding-left: 120px;
      &::before {
        transform: rotate(130deg);
        top: auto !important;
        bottom: -55px;
        right: 190px !important;
      }
    }
    &:nth-child(2n + 1) {
      padding-right: 120px;
      &::before {
        transform: rotate(55deg);
        top: auto !important;
        bottom: -55px;
        right: 160px !important;
      }
    }
    /* &:nth-child(3) {
      &::before {
        top: 190px !important;
      }
    }
    &:nth-child(4) {
      &::before {
        top: 164px !important;
        right: 182px !important;
      }
    }
    &:nth-child(5) {
      &::before {
        top: 210px !important;
        right: 163px !important;
      }
    }
    &:nth-child(6) {
      &::before {
        top: 162px !important;
        right: 179px !important;
      } */
  }
`;

const arrItemsLists = [
  { imgSrc: phone, alt: 'иконка телефона', text: 'Оставляете заявку или звоните' },
  { imgSrc: mess, alt: '', text: 'Оговариваем условия заправки картриджа' },
  { imgSrc: bus, alt: '', text: 'Выезд мастера или ваш визит в мастерскую' },
  { imgSrc: gasStation, alt: '', text: 'Заправка картриджа' },
  { imgSrc: check, alt: '', text: 'Проверка работоспособности картриджа' },
  { imgSrc: payment, alt: '', text: 'Оплата работы' },
  { imgSrc: okey, alt: '', text: 'Довольный клиент' },
];

class SchemeOfWork extends React.Component {
  componentDidMount() {
    let isScrolling = false;
    const listItems = document.querySelectorAll('.list-item__work');

    function isPartiallyVisible(el) {
      const elementBoundary = el.getBoundingClientRect();

      const { top } = elementBoundary;
      const { bottom } = elementBoundary;
      const { height } = elementBoundary;

      return top + height >= 0 && height + window.innerHeight >= bottom;
    }

    function scrolling(e) {
      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
          listItem.classList.add('active');
        } else {
          listItem.classList.remove('active');
        }
      }
    }

    function throttleScroll(e) {
      if (isScrolling === false) {
        window.requestAnimationFrame(() => {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }

    window.addEventListener('scroll', throttleScroll, false);

    document.addEventListener('DOMContentLoaded', scrolling, false);

    function isFullyVisible(el) {
      const elementBoundary = el.getBoundingClientRect();

      const { top } = elementBoundary;
      const { bottom } = elementBoundary;

      return top >= 0 && bottom <= window.innerHeight;
    }
  }

  render() {
    let animateTime = 0.2;
    return (
      <SectionStyle>
        <Container>
          <Title>Схема работы</Title>
          <div>
            <List>
              {arrItemsLists.map(({ imgSrc, alt, text }) => {
                animateTime += 0.3;
                console.log(animateTime);
                return (
                  <ListItem animateTime={animateTime} className="list-item__work">
                    <Circle>
                      <img src={imgSrc} alt={alt} />
                    </Circle>
                    <span className="text">{text}</span>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Container>
      </SectionStyle>
    );
  }
}

export default SchemeOfWork;
