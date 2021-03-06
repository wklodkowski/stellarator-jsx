import React from 'react';
import PropTypes from 'prop-types';

function Notification({ children, type }) {
	return (
		<div className={`alert alert-${type}`}>
            <strong>{children}</strong>
        </div>
	);
}

Notification.propTypes = {
	type: PropTypes.string
};

Notification.defaultProps = {
	type: 'default'
};

export default Notification;
