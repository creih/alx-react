// notificationReducer.js

import { Map, List } from 'immutable';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

const initialState = Map({
    loading: false,
    notifications: List(),
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_STATE:
            return state.set('loading', action.isLoading);
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.mergeDeep({
                notifications: List(action.notifications),
            });
        default:
            return state;
    }
};

export default notificationReducer;
