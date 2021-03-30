import React, { Component } from 'react';

import InputElement, {
  InputLabel,
  InputPlaceHolder,
  SelectElement,
  ButtonInput,
  SmallText,
  SelectImg,
  FormElement,
  Terms,
  Header,
  StyledLink,
} from './input.styles';

import arrowLogo from '../../arrow.svg';
import eyeLogo from '../../eye.svg';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      role: '',
      password: '',
      stage: 1,
      visibility: false,
      isEmailError: false,
    };
  }

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });

    if (event.target.name === 'email' && !event.target.validity.valid) {
      this.setState({ isEmailError: true });
      console.log(this.state);
    } else {
      this.setState({ isEmailError: false });
    }
  };

  checkDisability = () => {
    const { name, email, role, password } = this.state;

    if (name && email && role && password) {
      return false;
    }
    return true;
  };

  handleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });
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
    const {
      name,
      email,
      role,
      password,
      visibility,
      isEmailError,
    } = this.state;

    return (
      <FormElement>
        <Header>
          <h1>Let&apos;s set up your account</h1>
          <p>
            Already have an account? <StyledLink to='/'>Sign in</StyledLink>
          </p>
        </Header>
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
            type='email'
            name='email'
            onChange={this.handleChange}
            value={email}
            required
          />
          <InputPlaceHolder>Email Address</InputPlaceHolder>
        </InputLabel>
        {isEmailError && (
          <SmallText emailError='1'>Please enter a valid email</SmallText>
        )}
        <InputLabel>
          <SelectElement name='role' onChange={this.handleChange} value={role}>
            <option value=''>I would describe myself as</option>
            <option value='Developer'>Developer</option>
            <option value='UI/UX'>UI/UX Designer</option>
          </SelectElement>
          <SelectImg src={arrowLogo} />
        </InputLabel>
        <InputLabel>
          <InputElement
            type={visibility ? 'text' : 'password'}
            name='password'
            onChange={this.handleChange}
            value={password}
            required
          />
          <InputPlaceHolder>Password</InputPlaceHolder>
          <SelectImg onClick={() => this.handleVisibility()} src={eyeLogo} />
        </InputLabel>
        <SmallText>Minimum of 8 characters</SmallText>
        <ButtonInput
          onClick={this.handleForm}
          disabled={this.checkDisability()}
        >
          Next
        </ButtonInput>
        <Terms>
          {' '}
          By clicking the &quot;Next&quot; button, you are agree to creating a
          free account, and to <b>Terms of Service</b> and <b>Privacy Policy</b>
        </Terms>
      </FormElement>
    );
  }
}

export default FormInput;
