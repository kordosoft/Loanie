import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { DataViewModel } from 'modules/loan/types';

import './index.scss';

const DataView = ({ data, onChange }) => {
	const [dataView, setDataView] = useState(data);

	const inputOnChange = (evt) => {
		const { name, value } = evt.target;

		setDataView({ ...dataView, [name]: value });
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		onChange('DataView', dataView);

		if (dataView.numberOfPayments === 360) {
			inputOnChange(evt);
		}
	};

	return (
		<div className="data-view" onClick={handleSubmit} role="presentation">
			Here is my view
		</div>
	);
};

DataView.propTypes = {
	data: PropTypes.shape({}),
	onChange: PropTypes.func.isRequired
};

DataView.defaultProps = {
	data: new DataViewModel()
};

export default DataView;
