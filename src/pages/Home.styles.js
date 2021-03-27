import styled, { css } from 'styled-components';

const HomeContainer = styled.div`
	display: flex;

	height: 100vh;
`;

const flex = css``;

export const FormContainer = styled.div`
	${flex}
	width: 65vw;
`;

export const DescriptionContainer = styled.div`
	${flex}
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
