import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCourses, setCourses } from './courseActionCreators';
import { SET_COURSES } from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('fetchCourses action creator', () => {
    it('creates SET_COURSES when fetching courses has been done', () => {
        const store = mockStore({ courses: [] });
        const mockCourses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];

        mock.onGet('/dist/courses.json').reply(200, mockCourses);

        return store.dispatch(fetchCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ type: SET_COURSES, payload: mockCourses });
        });
    });
});
