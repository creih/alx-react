import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import PropTypes from 'prop-types';

// Notifications.propTypes = {
//     listNotifications: PropTypes.array.isRequired,
//     fetchNotifications: PropTypes.func.isRequired,
// };

class Notifications extends Component {
    componentDidMount() {
        const { fetchNotifications } = this.props;
        fetchNotifications();
    }

    render() {
        const { listNotifications } = this.props;

        return (
            <div>
                <h2>Notifications</h2>
                <ul>
                    {listNotifications.map((notification) => (
                        <li key={notification.id}>{notification.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    listNotifications: state.notifications.get('notifications'),
});

const mapDispatchToProps = {
    fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
