import React from 'react';
import SplashPage from '../components/SplashPage';
import { shallow } from 'enzyme';

describe('SpashPage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SplashPage />
    )
  });


  it('should render correctly.', () => {
    expect(wrapper).toMatchSnapshot();
  });

});