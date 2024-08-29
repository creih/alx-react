import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  render() {
    const { type, value, id, markAsRead } = this.props;

    return (
      <li onClick={() => markAsRead(id)} data-notification-type={type}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  markAsRead: () => {},
};

export default NotificationItem;
