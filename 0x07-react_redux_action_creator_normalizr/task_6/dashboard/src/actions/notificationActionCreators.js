import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

// Binding action creators
export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);
