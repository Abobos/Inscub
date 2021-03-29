import React, { Component } from 'react';

import FormInput from '../../components/Input/Input';
import Step from '../../components/Steps/Steps';

import HomeContainer, {
  FormContainer,
  DescriptionContainer,

} from './Home.styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Step />
        <FormContainer>
          <FormInput />
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
