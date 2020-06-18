import React from 'react';
import styled from 'styled-components';

import bgShadow from '../media/bg-shadow.png';

const WrapperShadow = styled.div`
  position: absolute;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  border-width: 1px;
  background-image: url(${bgShadow});
  height: 50px;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
`;

const Shadow = () => {
  return <WrapperShadow />;
};

export default Shadow;
