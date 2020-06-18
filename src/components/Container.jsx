import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  z-index: 50;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
