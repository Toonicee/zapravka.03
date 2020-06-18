import React from 'react';
import styled from 'styled-components';

import logoText from '../media/logo-text.png';

const WrapperLogo = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  span {
    font-size: 33px;
    font-weight: 600;
    display: inline-block;
    color: #3f51b5;
    margin-left: 15px;
  }

  @media screen and (max-width: 400px) {
    span {
      color: #fff;
    }
  }
`;

const ImageStyle = styled.img`
  border-radius: 50%;
  width: 100%;
  margin-right: 10px;
`;

const Logo = () => {
  return (
    <WrapperLogo>
      <ImageStyle
        src="https://ams2-cdn.2gis.com/previews/1058355161719635969/F7n49lJVgmal0sIzHIoj5VWjv04mUXY/1/image_112x112.png?api-version=2.0"
        alt="логотип компании"
        width="225"
      />
      <img src={logoText} alt="логотип компании" width="180px" />
    </WrapperLogo>
  );
};

export default Logo;
