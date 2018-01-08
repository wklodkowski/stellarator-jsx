import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

function Text({children, size, heading}){

    if(heading)
    {
        return(
            <h1 className={`${size}`}>
            {children}
            </h1>
        );
    }

    return(
        <h3 className={`${size}`}>
        {children}
        </h3>
    );
}

Text.propTypes = {
    size: PropTypes.string,
    heading: PropTypes.bool
};

Text.defaultProps = {
    size: 'medium',
    heading: false
};

export default Text;
