import styled from 'styled-components';

export const InputLabel = styled.label`
	position: relative;
`;

export const InputPlaceHolder = styled.span`
	position: absolute;
	font-size: 14px;
	left: 12px;

	top: 50%;
`;

const InputElement = styled.input`
	appearance: none;
	outline: none;
	width: 500px;
	padding: 8px;
	transition: all 6s;

	&:focus + span {
		top: -15px;
		background-color: white;
	}
`;

export default InputElement;
