import styled from 'styled-components';

const Stepper = styled.div`
  position: fixed;
  display: flex;
  height: 8px;
  right: 38vw;
  top: 40px;
  align-items: center;
  font-size: 17px;
`;

export const Indicator = styled.span`
  border-radius: 50%;
  border: 2px solid ${({ isNext }) => (isNext ? '#f2f2f2' : 'gray')};
  font-size: 0.2px;
  margin-left: 10px;
`;

export default Stepper;
