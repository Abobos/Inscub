import styled from 'styled-components';

export const InputLabel = styled.label`
  position: relative;
  font-size: 14px;
  padding-top: 20px;
  margin-bottom: 5px;
  width: 450px;
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
  width: 450px;
  padding: 16px;
  transition: all 6s;
  border: 1.5px solid #f2f2f2;
  border-radius: 5px;
  font-size: 14px;

  &:focus + span {
    top: 20px;
    font-size: 10px;
    color: #222;
    background-color: white;
  }

  &:focus:invalid {
    border-color: red;
  }

  &:focus:invalid + span {
    top: 20px;
    color: red;
  }

  &:valid + span {
    top: 20px;
  }
`;

export const SelectElement = styled.select`
  outline: none;
  width: 450px;
  padding: 16px;
  border: 1.5px solid #f2f2f2;
  border-radius: 5px;
  font-size: 14px;
  color: gray;
`;

export const ButtonInput = styled.button`
  outline: none;
  appearance: none;
  background-color: ${(props) =>
    props.disabled ? '#f2f2f2' : 'rgb(38, 113, 252)'};
  color: ${(props) => (props.disabled ? 'gray' : 'white')};
  width: 450px;
  padding: 15px;
  margin-top: 30px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default InputElement;
