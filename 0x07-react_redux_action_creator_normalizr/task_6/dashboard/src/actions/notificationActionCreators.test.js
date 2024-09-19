import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action creators tests', () => {
  it('markAsRead action creator returns the correct action', () => {
    const expectedAction = {
      type: MARK_AS_READ,
      index: 1,
    };
    expect(markAsRead(1)).toEqual(expectedAction);
  });

  it('setNotificationFilter action creator returns the correct action for DEFAULT filter', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
  });

  it('setNotificationFilter action creator returns the correct action for URGENT filter', () => {
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    expect(setNotificationFilter(NotificationTypeFilters.URGENT)).toEqual(expectedAction);
  });
});
