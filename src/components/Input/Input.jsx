import React, { Component } from 'react';
import InputElement, { InputLabel, InputPlaceHolder } from './Input.styles';

class FormInput extends Component {
	render() {
		return (
			<>
				<InputLabel>
					<InputElement type='text' />
					<InputPlaceHolder>Email Address</InputPlaceHolder>
				</InputLabel>
			</>
		);
	}
}

export default FormInput;
