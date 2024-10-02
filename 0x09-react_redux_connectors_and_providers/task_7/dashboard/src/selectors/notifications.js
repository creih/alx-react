import { createSelector } from 'reselect';
import { Map } from 'immutable';

export const getUnreadNotifications = (state) => {
    return state.notifications.notifications
        .filter((notification) => !notification.isRead)
        .valueSeq()
        .toArray();
};
