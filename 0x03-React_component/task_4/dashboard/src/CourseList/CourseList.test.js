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
  it('renders correctly with an empty course list', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('CourseListRow').length).toBe(2); // One header and one "No course available yet"
  });

  it('renders correctly with a valid course list', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
    ];
    const wrapper = shallow(<CourseList listCourses={courses} />);
    expect(wrapper.find('CourseListRow').length).toBe(4); // Two headers and two courses
  });
 });
