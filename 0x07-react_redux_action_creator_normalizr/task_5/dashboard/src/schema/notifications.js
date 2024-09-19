import { normalizedData } from './notifications';

// Function to get all notifications by user
export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.values(notifications)
    .filter(notification => notification.author === userId)
    .map(notification => messages[notification.context]);
}
