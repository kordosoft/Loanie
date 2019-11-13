import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DataViewModel } from 'modules/loan/types';

import './index.scss';

const DataView = ({ data, onChange }) => {
    const [dataSetup, setDataSetup] = useState(data);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        onChange(dataSetup);
    };

    const inputOnChange = (evt) => {
        const { name } = evt.target;
        const { value } = evt.target;

        setDataSetup({ ...dataSetup, ...{ [name]: value } });
    };

    return <div className="data-view" onClick={handleSubmit} role="presentation">Here is my view</div>;
};

DataView.propTypes = {
    data: PropTypes.instanceOf(DataViewModel),
    onChange: PropTypes.func.isRequired,
};

DataView.defaultProps = {
    data: new DataViewModel()
};

export default DataView;
