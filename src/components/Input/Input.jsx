import React, { Component } from 'react';

import InputElement, {
  InputLabel,
  InputPlaceHolder,
  SelectElement,
  ButtonInput,
} from './input.styles';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      role: '',
      password: '',
      stage: 1,
      isFormValid: false,
    };
  }

  handleChange = (event) => {
    const key = event.target.name;

    this.setState({ [key]: event.target.value });
  };

  handleForm = () => {
    const { name, email, role, password } = this.state;

    if (name && email && role && password) {
      console.log(this.state);
      return true;
    }
    console.log(this.state);
  };

  render() {
    const { name, email, role, password, isFormValid } = this.state;

    return (
      <>
        <InputLabel>
          <InputElement
            type='text'
            name='name'
            onChange={this.handleChange}
            value={name}
            required
          />
          <InputPlaceHolder>Your Name</InputPlaceHolder>
        </InputLabel>
        <InputLabel>
          <InputElement
            type='text'
            name='email'
            onChange={this.handleChange}
            value={email}
            required
          />
          <InputPlaceHolder>Email Address</InputPlaceHolder>
        </InputLabel>
        <InputLabel>
          <SelectElement
            name='role'
            onChange={this.handleChange}
            value={role}
            required
          >
            <option value=''>I would describe myself as</option>
            <option value='Developer'>Developer</option>
            <option value='UI/UX'>UI/UX Designer</option>
          </SelectElement>
        </InputLabel>
        <InputLabel>
          <InputElement
            type='password'
            name='password'
            onChange={this.handleChange}
            value={password}
            required
          />
          <InputPlaceHolder>Password</InputPlaceHolder>
        </InputLabel>
        <ButtonInput onClick={this.handleForm}>Next</ButtonInput>
      </>
    );
  }
}

export default FormInput;
