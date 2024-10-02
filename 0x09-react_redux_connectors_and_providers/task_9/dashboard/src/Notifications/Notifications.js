import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import PropTypes from 'prop-types';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';

const Notifications = ({ listNotifications, setNotificationFilter }) => {
    return (
        <div>
            <h2>Here is the list of notifications</h2>
            <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
            <button onClick={() => setNotificationFilter('default')}>💠</button>
            <ul>
                {listNotifications.map((notification) => (
                    <li key={notification.id}>{notification.message}</li>
                ))}
            </ul>
        </div>
    );
};

Notifications.propTypes = {
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
};

// class Notifications extends Component {
//     componentDidMount() {
//         const { fetchNotifications } = this.props;
//         fetchNotifications();
//         handleMarkAsRead = (id) => {
//             this.props.markAsRead(id);
//         };
//     }

//     render() {
//         const { listNotifications } = this.props;

//         return (
//             <div>
//                 <h2>Notifications</h2>
//                 <ul>
//                     {listNotifications.map((notification) => (
//                         <li key={notification.id} onClick={() => this.handleMarkAsRead(notification.id)}>{notification.text}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }


const mapStateToProps = (state) => ({
    listNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)),
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
