import { createSelector } from 'reselect';
import { Map } from 'immutable';

export const getCourses = (state) => {
    return state.courses.valueSeq().toList();
};
