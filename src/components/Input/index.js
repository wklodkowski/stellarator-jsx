import React from 'react';
import PropTypes from 'prop-types';

function Input({ children, type, name, placeholder, label, value, size, error, onInputChange }) {
	return (
        <input type={type} 
        name={name} 
        label={label} 
        value={value} 
        size={size} 
        onError={error} 
        onChange={onInputChange}/>
	);
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    error: PropTypes.string,
    onInputChange: PropTypes.func
};

Input.defaultProps = {
	type: 'text'
};

export default Input;
