import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { MARK_AS_READ } from './notificationActionTypes';

export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading,
});

export const setNotifications = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    notifications: data,
});

export const fetchNotifications = () => {
    return (dispatch) => {
        dispatch(setLoadingState(true));

        return fetch('/notifications.json')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setNotifications(data));
                dispatch(setLoadingState(false));
            })
            .catch((error) => {
                console.error('Error fetching notifications:', error);
                dispatch(setLoadingState(false));
            });
    };
};
export const markAsRead = (id) => ({
    type: MARK_AS_READ,
    id,
});
