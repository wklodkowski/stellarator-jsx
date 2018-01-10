import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Text({children, size, isHeading}){

    if(isHeading)
    {
        return(
            <h1 className={`${size}`}>
            {children}
            </h1>
        );
    }

    return(
        <span className={`${size}`}>
        {children}
        </span>
    );
}

Text.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isHeading: PropTypes.bool
};

Text.defaultProps = {
    size: 'medium',
    isHeading: false
};

export default Text;
