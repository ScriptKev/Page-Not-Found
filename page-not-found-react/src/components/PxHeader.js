import React from 'react'
import styled from 'styled-components';

const PxHeaderStyled = styled.header`
  width: 100%;
  height: 10vh;
  font-family: 'Inconsolata';
  color: #333333;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;

  h2{
    padding: 20px 130px;
  }
`;

const PxHeader = () => {
  return (
    <PxHeaderStyled>
      <h2>404 Not Found</h2>
    </PxHeaderStyled>
  )
}

export default PxHeader;
