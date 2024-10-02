import { combineReducers } from 'redux';
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    courses: courseReducer,
    notifications: notificationReducer,
});

describe('rootReducer', () => {
    it('should return the initial state', () => {
        const initialState = {
            courses: Map(),
            notifications: Map(),
            ui: Map(),
        };

        expect(rootReducer(undefined, {})).toEqual(initialState);
    });
});
