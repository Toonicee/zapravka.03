import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Title } from './style/style';

import fairPrice from '../media/i1_mR0zzVS.png';
import experience from '../media/i2_SHInxLW.png';
import fast from '../media/i3_vuuP8S9.png';
import quality from '../media/i4_QZyZHi8.png';
import bg from '../media/bg-servisec.jpg';
import bgShadow from '../media/bg-shadow.png';

const SectionStyle = styled.section`
  background: url(${bg});
  padding: 0 0 60px 0;
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

const SubTitle = styled.span`
  dispaly: inline-block;
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 22px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  overflow: hidden;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  .list__item {
    display: flex;
    justify-content: center;
    text-align: center;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    &.left {
      transform: translate3d(-600px, 0, 0);
      &.active {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
    &.right {
      transform: translate3d(600px, 0, 0);
      &.active {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
  }
`;

const WrapperContent = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;

  .description {
    font-size: 18px;
    font-weight: 500;
  }
`;

class OurAdvantages extends React.Component {
  componentDidMount() {
    let isScrolling = false;

    window.addEventListener('scroll', throttleScroll, false);

    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
    document.addEventListener('DOMContentLoaded', scrolling, false);
    const listItems = document.querySelectorAll('.list__item');

    function isPartiallyVisible(el) {
      const elementBoundary = el.getBoundingClientRect();

      const { top } = elementBoundary;
      const { bottom } = elementBoundary;
      const { height } = elementBoundary;

      return top + height >= 0 && height + window.innerHeight >= bottom;
    }

    function isFullyVisible(el) {
      const elementBoundary = el.getBoundingClientRect();

      const { top } = elementBoundary;
      const { bottom } = elementBoundary;

      return top >= 0 && bottom <= window.innerHeight;
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
  }

  render() {
    return (
      <SectionStyle>
        <Container>
          <Title>4 причины обратиться к нам</Title>
          <div>
            <List>
              <li className="list__item left">
                <WrapperContent>
                  <img src={fairPrice} alt="честная цена" />
                  <SubTitle>Честная цена</SubTitle>
                  <p className="description">
                    Цель нашей компании - предоставить объективно <b>честные цены</b> на
                    качественный продукт
                  </p>
                </WrapperContent>
              </li>
              <li className="list__item right">
                <WrapperContent>
                  <img src={experience} alt="опытные мастера" />
                  <SubTitle>Опытные мастера</SubTitle>
                  <p className="description">
                    Инженеры с опытом работы более 3 лет и своими наработками заправят любой
                    картридж
                  </p>
                </WrapperContent>
              </li>
              <li className="list__item left">
                <WrapperContent>
                  <img src={fast} alt="честная цена" />
                  <SubTitle>Оперативнось работы</SubTitle>
                  <p className="description">
                    В течение 10 минут опытный инженер проанализирует, очистит, заправит и проверит
                    картридж на работоспособность
                  </p>
                </WrapperContent>
              </li>
              <li className="list__item right">
                <WrapperContent>
                  <img src={quality} alt="честная цена" />
                  <SubTitle>Гарантия качества</SubTitle>
                  <p className="description">
                    Используем качественные расходные материалы, картриджи после заправки работают
                    без дефектовт
                  </p>
                </WrapperContent>
              </li>
            </List>
          </div>
        </Container>
      </SectionStyle>
    );
  }
}

export default OurAdvantages;
