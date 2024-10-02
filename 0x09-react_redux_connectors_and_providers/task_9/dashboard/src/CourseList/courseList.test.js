import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

jest.mock('../actions/courseActionCreators');

describe('<CourseList />', () => {
    let wrapper;
    const mockFetchCourses = jest.fn();
    const mockSelectCourse = jest.fn();
    const mockUnSelectCourse = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
            <CourseList
                fetchCourses={mockFetchCourses}
                selectCourse={mockSelectCourse}
                unSelectCourse={mockUnSelectCourse}
                listCourses={[{ id: '1', isSelected: false }, { id: '2', isSelected: true }]}
            />
        );
    });

    it('calls fetchCourses on mount', () => {
        expect(mockFetchCourses).toHaveBeenCalled();
    });

    it('dispatches selectCourse when onChangeRow is called with checked', () => {
        wrapper.instance().onChangeRow('1', true);
        expect(mockSelectCourse).toHaveBeenCalledWith('1');
    });

    it('dispatches unSelectCourse when onChangeRow is called with unchecked', () => {
        wrapper.instance().onChangeRow('2', false);
        expect(mockUnSelectCourse).toHaveBeenCalledWith('2');
    });
});
