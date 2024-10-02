import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';

describe('Action Creators', () => {
    
    it('setLoadingState should create an action to set loading state', () => {
        const expectedAction = {
            type: SET_LOADING_STATE,
            isLoading: true,
        };
        expect(setLoadingState(true)).toEqual(expectedAction);
    });

    it('setNotifications should create an action to set notifications', () => {
        const notifications = [{ id: 1, message: 'Notification 1' }];
        const expectedAction = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: notifications,
        };
        expect(setNotifications(notifications)).toEqual(expectedAction);
    });

    it('markAsRead should create an action to mark a notification as read', () => {
        const expectedAction = {
            type: MARK_AS_READ,
            id: 1,
        };
        expect(markAsRead(1)).toEqual(expectedAction);
    });

});
