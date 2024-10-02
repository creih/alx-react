import { createSelector } from 'reselect';

const getNotifications = (state) => state.notifications;

const getFilter = (state) => state.filter;

export const getUnreadNotificationsByType = createSelector(
    [getNotifications, getFilter],
    (notifications, filter) => {
        const unreadNotifications = notifications.filter(notification => !notification.isRead);
        
        if (filter === 'urgent') {
            return unreadNotifications.filter(notification => notification.isUrgent);
        }
        
        return unreadNotifications;
    }
);
