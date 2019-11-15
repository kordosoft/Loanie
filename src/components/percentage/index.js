import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent as Percent } from '@fortawesome/free-solid-svg-icons';

import { Input } from 'components';

const Percentage = (props) => {
	const addOn = () => {
		return (
			<span className="input-group-text">
				<FontAwesomeIcon icon={Percent} />
			</span>
		);
	};

	return <Input {...props} inputType="number" addOn={addOn()} />;
};

Percentage.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	step: PropTypes.number
};

Percentage.defaultProps = {
	placeholder: '',
	step: 0.01
};

export default Percentage;
