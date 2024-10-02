import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from './actions/authActions';

function Header({ user, logout }) {
    return (
        <header>
            <h1>My Application</h1>
            {user ? (
                <div>
                    <p>Welcome, {user.username}!</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <p>Please log in.</p>
            )}
        </header>
    );
}

Header.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    }),
    logout: PropTypes.func.isRequired
};

Header.defaultProps = {
    user: null
};

const mapStateToProps = (state) => ({
    user: state.ui.user
});

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
