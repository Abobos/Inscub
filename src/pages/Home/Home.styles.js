import styled, { css } from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const centralize = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  ${centralize}
  width: 65vw;

  @media only screen and (max-width: 1000px) {
    width: 100vw;
  }
`;

export const DescriptionContainer = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }

  ${centralize}
  width: 35vw;
  background-color: rgb(38, 113, 252);
  color: white;
  padding: 140px;

  & h1 {
    margin-top: 65px;
    font-size: 30px;
  }
  & .paragraph {
    margin-top: 80px;
    line-height: 1.7;
    letter-spacing: 0.5px;
    font-size: 16px;
    text-align: justify;
  }
`;

export default HomeContainer;
