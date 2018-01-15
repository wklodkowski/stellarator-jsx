import React from 'react';
import PropTypes from 'prop-types';
import Input from './../Input';

function Form({ children, config }) {
	return (
		<form>
			{
				config.map((el, index) => {
					return (
						<Input
							key={index}
							name={el.name}
							type={el.type}
							placeholder={el.placeholder}
							label={el.label}
							value={el.value}
							size={el.size}
							error={el.error}
						/>
					)
				})
			}
		</form>
	);
}

Form.propTypes = {
	config: PropTypes.array.isRequired
};

export default Form;
