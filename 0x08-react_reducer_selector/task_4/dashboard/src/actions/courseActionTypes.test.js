// reducers/courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Initial state should be an empty array
const initialState = [];

const courseData = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

describe('courseReducer', () => {
  it('should return the default state as an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the data with isSelected set to false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courseData
    };
    
    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    const state = courseReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and set the isSelected property of the correct course to true', () => {
    const fetchAction = {
      type: FETCH_COURSE_SUCCESS,
      data: courseData
    };

    let state = courseReducer(undefined, fetchAction);

    const selectAction = {
      type: SELECT_COURSE,
      index: 2
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    state = courseReducer(state, selectAction);
    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and set the isSelected property of the correct course to false', () => {
    const fetchAction = {
      type: FETCH_COURSE_SUCCESS,
      data: courseData
    };

    let state = courseReducer(undefined, fetchAction);

    // First, select the course
    const selectAction = {
      type: SELECT_COURSE,
      index: 2
    };
    state = courseReducer(state, selectAction);

    const unselectAction = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const expectedState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];

    state = courseReducer(state, unselectAction);
    expect(state).toEqual(expectedState);
  });
});
