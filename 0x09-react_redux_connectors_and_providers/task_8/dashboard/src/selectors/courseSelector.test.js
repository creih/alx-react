import { fromJS } from 'immutable';
import { getCourses } from './courseSelector';

describe('getCourses selector', () => {
    it('should return all courses as a List', () => {
        const state = fromJS({
            courses: {
                1: { id: 1, name: 'Course 1' },
                2: { id: 2, name: 'Course 2' },
            },
        });

        const expectedCourses = [
            { id: 1, name: 'Course 1' },
            { id: 2, name: 'Course 2' },
        ];

        expect(getCourses(state)).toEqual(fromJS(expectedCourses));
    });
});
