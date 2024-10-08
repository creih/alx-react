/*
    from task 3:
    Update the mapStateToProps function to also pass to the component the value for displayDrawer. It should be connected to the Reducer attribute isNotificationDrawerVisible
    Update the render function of the component to use the value displayDrawer coming from the props instead of the state

    from task 4:
    Connect to the component the actions creators displayNotificationDrawer and hideNotificationDrawer
    You should use the simplified version for the mapDispatchToProps. No need to import bindActionCreators
    Modify the render function of the component to use the functions passed within the props instead of the action within the Class component

*/
import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';
function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{isLoggedIn ? 'You are logged in' : 'You are not logged in'}</p>

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
    displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired
};

App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.get('isUserLoggedIn'),
        displayDrawer: state.get('isNotificationDrawerVisible')
    };
}

const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);