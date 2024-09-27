// reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

// Initial state
const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

const notificationsData = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

describe('notificationReducer', () => {
  it('should return the default state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and return the correct state', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData,
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and set the isRead attribute to true for the correct notification', () => {
    const fetchAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData,
    };

    let state = notificationReducer(undefined, fetchAction);

    const markAsReadAction = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    state = notificationReducer(state, markAsReadAction);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter correctly', () => {
    const fetchAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData,
    };

    let state = notificationReducer(undefined, fetchAction);

    const setFilterAction = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const expectedState = {
      filter: 'URGENT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    state = notificationReducer(state, setFilterAction);
    expect(state).toEqual(expectedState);
  });
}); 
