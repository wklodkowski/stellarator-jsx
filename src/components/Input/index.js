import React from 'react';
import PropTypes from 'prop-types';

function Input({ children, type, name, placeholder, label, value, size, error, onInputChange }) {

    let validClass = error ? 'is-invalid' : '';

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {type !== 'textarea' ? (

                <input type={type}
                    name={name}
                    defaultValue={value}
                    size={size}
                    className={`form-control ${validClass}`}
                    placeholder={placeholder}
                />
            ) : (<textarea
                name={name}
                defaultValue={value}
                size={size}
                className={`form-control ${validClass}`}
                placeholder={placeholder}>

            </textarea>)}
            {error && (<div className="invalid-feedback">{error}</div>)}
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
    type: 'text',
    value: ''
};

export default Input;
