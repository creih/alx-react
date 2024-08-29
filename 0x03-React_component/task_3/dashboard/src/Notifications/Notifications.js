import React, { Component } from 'react';
import NotificationItem from './NotificationItem'; // Adjust the path if necessary
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications } = this.props;

    return (
      <div className="Notifications">
        <ul>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              id={notification.id}
              type={notification.type}
              value={notification.value}
              markAsRead={this.markAsRead}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default Notifications;