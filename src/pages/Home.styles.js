import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(38, 113, 252);
  font-weight: bolder;
`;

export const Header = styled.div`
  text-align: left;
  & h1,
  & p {
    margin: 0 150px 40px 0;
  }
`;
export const Terms = styled.div`
  width: 450px;
  margin-top: 30px;
  line-height: 1.7;
  font-size: 12px;
  text-align: justify;

  & b {
    color: rgb(38, 113, 252);
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
  }
`;

export default HomeContainer;
