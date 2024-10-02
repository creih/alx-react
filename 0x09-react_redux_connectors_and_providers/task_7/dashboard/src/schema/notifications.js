import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    // This method controls whether the component should update or not.
    // It updates only when `displayDrawer` changes.
    return nextProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className="Notifications">
        {/* Menu item */}
        <div className="menuItem" onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>

        {/* Notification drawer */}
        {displayDrawer && (
          <div className="notificationDrawer">
            <button 
              className="closeButton" 
              onClick={handleHideDrawer}
              aria-label="Close"
            >
              X
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
