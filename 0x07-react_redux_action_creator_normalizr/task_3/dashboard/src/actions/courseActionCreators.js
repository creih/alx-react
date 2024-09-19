import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action creator for selecting a course
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

// Action creator for unselecting a course
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
