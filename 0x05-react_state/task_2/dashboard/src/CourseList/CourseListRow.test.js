import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  it('renders one cell when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
    expect(wrapper.find('th').length).toBe(2);
  });

  it('renders two cells when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Row" textSecondCell="Data" />);
    expect(wrapper.find('td').length).toBe(2);
  });
});
