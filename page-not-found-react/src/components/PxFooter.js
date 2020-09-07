import React from 'react'
import styled from 'styled-components';

const PxFooterStyled = styled.footer`
  height: 10vh;
  width: 100%;
  font-family: 'Inconsolata';
  color: #333333;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  display:flex;
  justify-content: center;
  align-items: center;
`;
const PxFooter = () => {
  return (
    <PxFooterStyled>
      <small>@ScriptKev</small>
    </PxFooterStyled>
  )
}

export default PxFooter;
