import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

// Action creator for login
export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

// Action creator for logout
export function logout() {
  return {
    type: LOGOUT,
  };
}

// Action creator for displaying the notification drawer
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

// Action creator for hiding the notification drawer
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}
