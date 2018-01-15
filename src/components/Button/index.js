import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Button({ children, type, disabled, loading, classType, onButtonClick }) {
	return (
		<button
			type={type}
			className={`btn btn-${classType}`}
			onClick={onButtonClick}>
			{loading ? 'Loading...' : children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	classType: PropTypes.string,
	onButtonClick: PropTypes.func
};

Button.defaultProps = {
	type: 'submit'
};

export default Button;
