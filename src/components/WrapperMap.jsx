import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const StyledDiv = styled.div`
  display: ${props => (props.isCheck ? 'none' : 'block')};
  width: 100%;
  height: 100%;
  background: red;
  opacity: 0.3;
`;

const WrapperBtn = styled.div`
  z-index: 105;
`;

const WrapperMap = () => {
  const [isCheck, setState] = useState(false);
  return (
    <StyledDiv isCheck={isCheck} onClick={() => setState(!isCheck)}>
      <WrapperBtn>
        <Button>назад</Button>
      </WrapperBtn>
    </StyledDiv>
  );
};

export default WrapperMap;
