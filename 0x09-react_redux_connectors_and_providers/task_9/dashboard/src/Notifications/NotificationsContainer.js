import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

const NotificationsContainer = ({ fetchNotifications, ...props }) => {
    useEffect(() => {
        fetchNotifications();
    }, [fetchNotifications]);

    return <Notifications {...props} />;
};

const mapStateToProps = (state) => ({
    listNotifications: state.notifications.get('messages'),
});

const mapDispatchToProps = {
    fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
