import React from 'react';
import PropTypes, { string } from 'prop-types';

function Form({ children, config }) {
    var formElements = config.map((element) => 
    <div>
        <input />
    </div>
);

	return (
		<form>
            {formElements}
        </form>
	);
}

Form.propTypes = {
	config: PropTypes.array
};

export default Form;
