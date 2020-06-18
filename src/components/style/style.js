import styled from 'styled-components';
import bgShadow from '../../media/bg-shadow.png';

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 27px;
  font-weight: 400;
  padding-top: 40px;
  margin-bottom: 40px;
  text-align: center;
`;

export const WrapperShadow = styled.div`
  position: absolute;
  background-position: 50% 0%;
  background-repeat: no-repeat;
  border-width: 1px;
  background-image: url(${bgShadow});
  height: 50px;
  top: 0;
  width: 100%;
  z-index: 1;
  left: 0;
`;
