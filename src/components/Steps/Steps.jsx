import React, { Component } from 'react';

import Stepper from './Steps.styles';

class Step extends Component {
	render() {
		return (
			<Stepper>
				<h6>Step 1 of 3</h6>
				<span />
				<span />
				<span />
			</Stepper>
		);
	}
}

export default Step;
