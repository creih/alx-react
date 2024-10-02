import { getUnreadNotificationsByType } from './notificationSelector';
import { fromJS } from 'immutable';

describe('notificationSelector tests', () => {
    const state = fromJS({
        notifications: {
            filter: 'default',
            notifications: {
                1: { id: 1, message: 'Notification 1', isRead: false, type: 'urgent' },
                2: { id: 2, message: 'Notification 2', isRead: true, type: 'urgent' },
                3: { id: 3, message: 'Notification 3', isRead: false, type: 'default' }
            }
        }
    });

    it('should return all unread notifications when filter is default', () => {
        const result = getUnreadNotificationsByType(state);
        expect(result.size).toEqual(2);
        expect(result.some(n => n.id === 1)).toBe(true);
        expect(result.some(n => n.id === 3)).toBe(true);
    });

    it('should return only unread urgent notifications when filter is set to urgent', () => {
        const urgentState = state.setIn(['notifications', 'filter'], 'urgent');
        const result = getUnreadNotificationsByType(urgentState);
        expect(result.size).toEqual(1);
        expect(result.some(n => n.id === 1)).toBe(true);
    });
});
