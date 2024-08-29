import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection'; // Adjust the path if necessary

describe('BodySection Component', () => {
  it('should render correctly with an h2 and children', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    expect(wrapper.find('h2').text()).toEqual('test title');
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
