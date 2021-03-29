import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormElement = styled.div`
  display: inline-block;
  max-width: 500px;
  padding: 0 20px;
`;

export const Header = styled.div`
  width: 100%;
  align-self: start;

  & h1,
  & p {
    margin-bottom: 40px;
  }
`;

export const Terms = styled.div`
  width: 100%;
  margin-top: 30px;
  line-height: 1.7;
  font-size: 12px;
  text-align: justify;

  & b {
    color: rgb(38, 113, 252);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(38, 113, 252);
  font-weight: bolder;
`;

export const InputLabel = styled.label`
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
  display: inline-block;
  width: 100%;
`;

export const InputPlaceHolder = styled.span`
  position: absolute;
  left: 12px;
  top: calc(50% + 10px);
  transform: translateY(-50%);
  color: gray;
  transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
`;

const InputElement = styled.input`
  appearance: none;
  outline: none;
  padding: 16px;
  transition: all 6s;
  border: 1.5px solid #f2f2f2;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;

  &:focus + span {
    top: 20px;
    font-size: 10px;
    color: #222;
    background-color: white;
  }

  /* &:focus:invalid {
    border-color: red;
  }

  &:focus:invalid + span {
    top: 20px;
    color: red;
  }
*/
  &:valid {
    appearance: none;
  }

  &:valid + span {
    top: 20px;
  }
`;

export const SelectElement = styled.select`
  outline: none;
  width: 100%;
  padding: 16px;
  border: 1.5px solid #f2f2f2;
  border-radius: 5px;
  font-size: 14px;
  color: gray;
  appearance: none;
  background: none;
`;

export const SelectImg = styled.img`
  position: absolute;
  width: 13px;
  right: 9px;
  top: 38px;
`;

export const ButtonInput = styled.button`
  outline: none;
  appearance: none;
  background-color: ${(props) =>
    props.disabled ? '#f2f2f2' : 'rgb(38, 113, 252)'};
  color: ${(props) => (props.disabled ? 'gray' : 'white')};
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const SmallText = styled.small`
  align-self: start;
`;

export default InputElement;
