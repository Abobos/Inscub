import React, { Component } from 'react';

import FormInput from '../../components/Input/Input';
import Step from '../../components/Steps/Steps';

import HomeContainer, {
  FormContainer,
  DescriptionContainer,
  Terms,
  Header,
  StyledLink,
} from '../home.styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Step />
        <FormContainer>
          <Header>
            <h1>Let&apos;s set up your account</h1>
            <p>
              Already have an account? <StyledLink to='/'>Sign in</StyledLink>
            </p>
          </Header>
          <FormInput />

          <Terms>
            {' '}
            By clicking the &quot;Next&quot; button, you are agree to creating a
            free account, and to <b>Terms of Service</b> and{' '}
            <b>Privacy Policy</b>
          </Terms>
        </FormContainer>
        <DescriptionContainer>
          {' '}
          <h1>Dummy Heading</h1>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis possimus rem necessitatibus voluptate quidem ea,
            dolore.
          </p>
        </DescriptionContainer>
      </HomeContainer>
    );
  }
}

export default Home;
