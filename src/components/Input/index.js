import React from 'react';
import PropTypes from 'prop-types';

function Input({ children, type, name, placeholder, label, value, size, error, onInputChange }) {
    return (
        <div className="form-group">
            <label for={name}>{label}</label>
            <input type={type}
                name={name}
                value={value}
                size={size}
                className="form-control"
                placeholder={placeholder}
                 />
        </div>

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
