import { Map } from 'immutable';
import notificationReducer from './notificationReducer';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    const initialState = Map({
        loading: false,
        notifications: Map({}),
    });

    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_LOADING_STATE', () => {
        const action = { type: SET_LOADING_STATE, isLoading: true };
        const expectedState = initialState.set('loading', true);
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });
    it('should handle SET_LOADING_STATE', () => {
        const action = { type: SET_LOADING_STATE, isLoading: true };
        const expectedState = initialState.set('loading', true);
        expect(notificationReducer(initialState, action)).toEqual(expectedState);
    });

});
