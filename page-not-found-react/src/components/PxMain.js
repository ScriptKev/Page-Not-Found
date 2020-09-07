import React from 'react'
import styled from 'styled-components';
import mainImage from '../static/img/mainImg.png';

const PxMainStyled = styled.main`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 20px;
`;
const PxNotFoundImgStyled = styled.figure`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-top: 100px;

`

const PxNotFoundContentStyled = styled.section`
  align-self: center;
  font-family: 'Space Mono';

  h2 {
    color: #333333;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
    margin-bottom: 34px;
  }

  p {
    color: #4F4F4F;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    margin-bottom: 64px;
  }
`;

const PxButtonStyled = styled.button`
  background-color: #333333;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  color: #FFFFFF;
`;

const PxMain = () => {
  return (
    <PxMainStyled>
      <PxNotFoundImgStyled>
        <img src={ mainImage } alt="not-found" width="539px" height="447px" />
      </PxNotFoundImgStyled>

      <PxNotFoundContentStyled>
        <h2>I have  bad news <br/> for you</h2>
        <p>
          The page you are looking <br/>
          for might be removed or is <br/>
          temporarily unavailable
        </p>
        <PxButtonStyled>
          Back to homepage
        </PxButtonStyled>
      </PxNotFoundContentStyled>
    </PxMainStyled>
  )
}

export default PxMain;
