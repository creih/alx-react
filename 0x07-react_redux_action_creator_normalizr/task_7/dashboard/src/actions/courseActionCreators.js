import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

// Binding action creators
export const boundSelectCourse = (dispatch) => bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = (dispatch) => bindActionCreators(unSelectCourse, dispatch);
