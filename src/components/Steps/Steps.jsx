import React, { Component } from 'react';

import Stepper, { Indicator } from './steps.styles';

class Step extends Component {
  render() {
    return (
      <Stepper>
        <h6>Step 1 of 3</h6>
        <Indicator />
        <Indicator />
        <Indicator />
      </Stepper>
    );
  }
}

export default Step;
