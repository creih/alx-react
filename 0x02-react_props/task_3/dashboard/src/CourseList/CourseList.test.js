import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the correct number of rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tr').length).toBe(4); // 1 header row + 3 course rows
  });
});
