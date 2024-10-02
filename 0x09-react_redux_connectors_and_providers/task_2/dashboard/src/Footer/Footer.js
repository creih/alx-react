import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer({ user }) {
    return (
        <footer>
            <p>{user ? `Logged in as: ${user.username}` : 'Not logged in'}</p>
        </footer>
    );
}

Footer.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string
    })
};

Footer.defaultProps = {
    user: null
};
const mapStateToProps = (state) => ({
    user: state.get('user')
});

export default connect(mapStateToProps)(Footer);
