// src/selectors/notificationSelector.js

export const filterTypeSelected = (state) => state.notifications.filter;

export const getNotifications = (state) => {
  const notifications = state.notifications.notifications;
  return new Map(notifications.map(notification => [notification.id, notification]));
};

export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.notifications.filter(notification => !notification.isRead);
  return new Map(notifications.map(notification => [notification.id, notification]));
};
