/*
    from task 3:
    Update the mapStateToProps function to also pass to the component the value for displayDrawer. It should be connected to the Reducer attribute isNotificationDrawerVisible
    Update the render function of the component to use the value displayDrawer coming from the props instead of the state

    from task 4:
    Connect to the component the actions creators displayNotificationDrawer and hideNotificationDrawer
    You should use the simplified version for the mapDispatchToProps. No need to import bindActionCreators
    Modify the render function of the component to use the functions passed within the props instead of the action within the Class component
    
    task 8:
    Connect the action creator loginRequest and map it to the login prop
    Modify the component to use the new login function from the props instead of the one within the class
    Refactor the component to remove any login or logout function and bind
    
    task 20:
    With this new behavior, let’s clean up old functions and test data

    Delete NotificationItemShape.js
    Remove the notification list and delete markNotificationAsRead within App.js
*/
import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';
import PropTypes from 'prop-types';
import { loginRequest, logout } from '../actions/authActions';
import Notifications from '../Notifications/Notifications';

function App({ isLoggedIn, displayDrawer, login, logout, displayNotificationDrawer, hideNotificationDrawer }) {
    const handleLogin = (credentials) => {
        login(credentials);
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{isLoggedIn ? 'You are logged in' : 'You are not logged in'}</p>

            {isLoggedIn ? (
                <button onClick={logout}>Logout</button> // Use logout prop
            ) : (
                <button onClick={() => handleLogin({ username: 'user', password: 'pass' })}>Login</button> // Use handleLogin
            )}

            {displayDrawer ? (
                <div className="notification-drawer">
                    <p>Notification Drawer is visible</p>
                    <button onClick={hideNotificationDrawer}>Hide Drawer</button>
                </div>
            ) : (
                <button onClick={displayNotificationDrawer}>Show Notification Drawer</button>
            )}
        </div>
    );
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired
};

App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.ui.isLoggedIn,
        displayDrawer: state.ui.displayDrawer,
    };
}

const mapDispatchToProps = {
    login: loginRequest,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);